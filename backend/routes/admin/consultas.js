var express = require('express');
var router = express.Router();

// estopara listar las consultas
router.get('/', async function (req, res, next) {
    res.render('admin/consultas', {
        layout: 'admin/layout',
        usuario: req.session.nombre
    })
}); //cierre inicial

module.exports = router;