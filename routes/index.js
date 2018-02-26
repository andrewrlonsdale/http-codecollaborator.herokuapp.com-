var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Collaborator' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Collaborator - a platform for sharing code' });
});

router.route('/contact')
.get(function(req, res, next) {
  res.render('contact', { title: 'Collaborator - a platform for sharing code' });
})
.post(function(req, res, next) {
  res.render('thank', { title: 'Collaborator - a platform for sharing code' });
});

module.exports = router;
