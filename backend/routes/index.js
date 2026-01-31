var express = require('express');
var router = express.Router();
var consultasModel = require('../models/consultasModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', async (req, res, next) => {
  var nombre = req.body.nombre;
  var email = req.body.email;
  var mensaje = req.body.mensaje;

  var obj = {
    nombre: nombre,
    email: email,
    telefono, 
    motivo: motivo
  };

  await consultasModel.insertConsulta(obj);

  res.render('index', { 
    isHomePage: true,
    message: '¡Gracias por tu consulta! La Dra. Gómez te contactará a la brevedad.' 
  });
});

module.exports = router;
