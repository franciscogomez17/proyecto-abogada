var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModels');

/*diseño del formulario*/ 
router.get('/', function (req, res, next){
    res.render('admin/login', { //login.hbs
        layout: 'admin/layout',
    });
});

/*destruir session*/
router.get('/logout', function (req, res, next) {
    req.session.destroy(); //esto destruye las variables de sesion (id y usuario)
    res.render('admin/login', {
        layout: 'admin/layout'
    });
});

/*procesar el formulario => post*/
router.post('/', async (req, res, next) => {
    try{
        var usuario = req.body.usuario; //francisco
        var password = req.body.password; //frangomez

        var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);

        if (data != undefined) {
            req.session.id_usuario = data.id; //1
            req.session.nombre = data.usuario; //francisco
            res.redirect('/admin/consultas');
        } else {
            res.render('admin/login', {
                layout: 'admin/layout',
                error: true
            });
        }
    } catch (error) {
        console.log(error);
    }//cierre del catch
}); //cierre del router post


module.exports = router;