var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('../views/pages/shop/cart.hbs', { title: 'Express' });
});

module.exports = router;