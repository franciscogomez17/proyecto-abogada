var express = require('express');
var router = express.Router();
var consultasModel = require('./../../models/consultasModels');

// esto es para listar las consultas
router.get('/', async function (req, res, next) {
    var consultas = await consultasModel.getConsultas();
    res.render('admin/consultas', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        consultas
    });
}); //cierre inicial

router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    });
});

router.post('/agregar', async (req, res, next) => {
    try {
        if(req.body.nombre != "" && req.body.email != "" && req.body.telefono != "" && req.body.motivo != "") {
            await consultasModel.insertConsulta(req.body);
            res.redirect('/admin/consultas')
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true, message: 'Se requiere de todos los campos'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout', 
            error: true, message: 'No se cargo la consulta'
        });
    }
});

router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;
    await consultasModel.deleteConsultaById(id);
    res.redirect('/admin/consultas')
});

router.get('/modificar/:id', async (req, res, next) => {
    let id = req.params.id;
    let consulta = await consultasModel.getConsultaById(id);
    res.render('admin/modificar', {
        layout: 'admin/layout',
        consulta
    });
});

router.post('/modificar', async (req, res, next) => {
    try {
        let obj = {
            nombre: req.body.nombre,
            email: req.body.email,
            telefono: req.body.telefono,
            motivo: req.body.motivo
        }
        await consultasModel.modificarConsultaById(obj, req.body.id);
        res.redirect('/admin/consultas');
    } catch (error) {
        console.log(error);
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true, message: 'No se modifico la consulta'
        })
    }
})

module.exports = router;