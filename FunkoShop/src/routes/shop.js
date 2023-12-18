var express = require('express');
var router = express.Router();
var connection =require('./../config/conn');

/* GET SHOP page. */
router.get('/', function(req, res, next) {

    let consulta = 'select product.product_id, product.image_front, product.image_back, licence.licence_name, product.product_name, product.price, product.dues from product, licence where product.licence_id = licence.licence_id'

    connection.query(consulta, function (error, results, fields) {
        if (error) throw error;
        
        res.render('pages/shop/shop.hbs', { productos: results });
       
    });
});

/* GET ITEM page. */
router.get('/item/:product_id', function(req, res, next) {

    let consulta = 'select product.product_id, product.image_front, product.image_back, licence.licence_name, product.product_name, product.price, product.product_description,product.dues from product, licence where product.licence_id = licence.licence_id and product.product_id = ' + req.params.product_id;

    connection.query(consulta, function (error, results, fields) {
        if (error) throw error;

        res.render('pages/shop/item', { product: results[0] });
    });
});

/* GET SHOP * licence */
router.get('/:licence_name', function(req, res, next) {

    let consulta = "SELECT product.product_id, product.image_front, product.image_back, licence.licence_name, product.product_name, product.price, product.product_description, product.dues FROM product, licence WHERE product.licence_id = licence.licence_id AND licence.licence_name = '" + req.params.licence_name + "'";



    console.log(consulta);
    connection.query(consulta, function (error, results, fields) {
        
        
        res.render('pages/shop/shop', { productos: results });
        if (error) throw error;
        console.log(consulta)
    });
});


module.exports = router;


