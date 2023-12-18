var express = require('express');
var router = express.Router();
const path = require('path');

/* GET ADMIN page. */
router.get('/', function(req, res, next) {
    res.render('../views/pages/admin/admin.hbs', { title: 'Express' });
});

/* GET CREATE page */
router.get('/create', function(req, res, next) {
    res.render('pages/admin/create.hbs', { title: 'Express' });
});

module.exports = router;