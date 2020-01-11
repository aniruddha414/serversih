let express = require('express');
let router = express.Router();
let storeDetails = require('../components/authentication/storeDetails');
let collectionNames = {};
let getCollectionNames = function (names) {
	collectionNames = names;
};
/* GET users listing. */
router.get('/login', function(req, res, next) {
	res.render('login');
});

router.post('/loginInfo',function (req,res) {
	console.log('In Login saving details to mongo db');
	console.log(req.body);
  storeDetails.storeDetails(collectionNames,req,res);
  // res.send("1")
});

module.exports = router;
module.exports.getCollectionNames = getCollectionNames;
