var express = require('express');
var router = express.Router();
var Product = require('../models/product')


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('shop/index', { title: 'Alibazon' });
});

/* men page */
router.get('/men/clothing', function(req, res, next) {
    var products = Product.find(function(err, docs){
      res.render('shop/men/clothing', {title: 'Alibazon', products: products});
    });
    
  });
  


router.get('/men/accesories', function(req, res, next) {
  res.render('shop/men/accesories');
});



/* women page */
router.get('/women/clothing', function(req, res, next) {
  res.render('shop/women/clothing');
});

router.get('/women/accesories', function(req, res, next) {
  res.render('shop/women/accesories');
});

router.get('/women/jewelry', function(req, res, next) {
  res.render('shop/women/jewelry');
});

module.exports = router;
