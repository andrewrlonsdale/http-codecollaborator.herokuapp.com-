var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Collaborator' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Code4share - a platform for sharing code' });
});

module.exports = router;
