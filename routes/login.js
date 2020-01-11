var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/signup', function(req, res, next) {
  res.send('<h1>Sign up Page</h1>');
});

module.exports = router;
