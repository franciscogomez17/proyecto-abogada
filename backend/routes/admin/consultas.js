var express = require('express');
var router = express.Router();
var consultasModel = require('../../models/consultasModel');

router.get('/', async function (req, res, next) {
    
   
    var consultas = await consultasModel.getConsultas();

    
    res.render('admin/consultas', {
        layout: 'admin/layout',
        usuarios: req.session.nombre,
        consultas
    });
});

router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', { // Debes crear el archivo views/admin/agregar.hbs
        layout: 'admin/layout'
    });
});

router.post('/agregar', async (req, res, next) => {
    try {
        if (req.body.nombre != "" && req.body.email != "" && req.body.motivo != "") {
            await consultasModel.insertConsulta(req.body);
            res.redirect('/admin/consultas');
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true, message: 'Todos los campos son requeridos'
            });
        }
    } catch (error) {
        console.log(error);
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true, message: 'No se cargó la consulta'
        });
    }
});

module.exports = router;