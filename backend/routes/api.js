var express = require('express');
var router = express.Router();
var consultasModels = require('./../models/consultasModels'); 
var nodemailer = require('nodemailer');

//en este archivo configure una ruta de tipo POST, cuando el formulario de React envia los datos, esta ruta los recibe en el objeto req.body, es el puente que conecta lo que el usuario escribe con mi servidor

router.post('/consultas', async (req, res) => {
    try {
        // req.body contiene los datos que se envian desde React
        await consultasModels.insertConsulta(req.body); 

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: "fran.gomez171106@gmail.com",
            subject: "Nueva consulta desde la web",
            text: `
                Nombre: ${req.body.nombre}
                Email: ${req.body.email}
                Teléfono: ${req.body.telefono}
                Motivo: ${req.body.motivo}
            `
        };

        await transporter.sendMail(mailOptions);

        res.status(201).json({
            error: false,
            message: 'Mensaje enviado correctamente'
        });
    } catch (error) {
       console.log("ERROR REAL:", error);
        res.status(500).json({
            error: true,
            message: 'No se pudo enviar el mensaje'
        });
    }
});

//lo que hago con este get es recibir todas las consultas
router.get('/consultas', async (req, res) => {
try {
const consultas = await consultasModels.getConsultas();

res.json(consultas);

} catch (error) {
console.log(error);
res.status(500).json({
error: true,
message: 'Error al obtener consultas'
});
}
});

module.exports = router;