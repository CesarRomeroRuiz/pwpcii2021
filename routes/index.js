var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', author: 'Cesar Ruiz :)', appName: 'WebApp :)' });
});

/*Agregar nueva ruta*/
router.get('/greeting', function(req, res, next){
  res.send('Hola chavo de la Fullstack Web')
})

module.exports = router;
