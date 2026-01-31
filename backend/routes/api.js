var express = require('express');
var router = express.Router();
var consultasModel = require('./../models/consultasModel');


router.post('/contacto', async (req, res) => {
    try {
        
        await consultasModel.insertConsulta(req.body);
        
        res.status(201).json({
            error: false,
            message: 'Consulta enviada con éxito'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: true,
            message: 'No se pudo guardar la consulta'
        });
    }
});

module.exports = router;