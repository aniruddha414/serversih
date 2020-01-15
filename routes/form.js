let express = require('express');
let router = express.Router();
let storeForm = require('../components/form/storeForm.js');
let collectionNames = {};
let getCollectionNames = function (names) {
	collectionNames = names;
};
/* GET users listing. */
router.get('/form', function(req, res, next) {
	res.send('form api');
});

router.post('/storeForm',function (req,res) {
	console.log('Storing form to mongo db');
	console.log(req.body);
  storeForm.storeForm(collectionNames,req,res);
  // res.send("1")
});

module.exports = router;
module.exports.getCollectionNames = getCollectionNames;
