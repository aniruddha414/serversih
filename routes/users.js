var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/userProfile', function(req, res, next) {
  res.send('This is user profile');
});

module.exports = router;