var express = require('express');
var router = express.Router();
var consultasModels = require('./../models/consultasModels'); 

router.post('/consultas', async (req, res) => {
    try {
        // req.body contiene los datos que se envian desde React
        await consultasModels.insertConsulta(req.body); 
        res.status(201).json({
            error: false,
            message: 'Mensaje enviado correctamente'
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            message: 'No se pudo enviar el mensaje'
        });
    }
});

module.exports = router;