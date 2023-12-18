var express = require('express');
var router = express.Router();
var connection =require('./../config/conn');

/* GET home page. */

router.get('/', function(req, res, next) {

  connection.query('SELECT * from licence', function (error, results, fields) {
    if (error) throw error;
    res.render('index',{licences: results} );
  });

});

module.exports = router;
