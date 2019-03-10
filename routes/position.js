var express = require('express');
var router = express.Router();
const positionCtrl = require('../controller/positionCtrl');
/* GET users listing. */
router.post('/save', positionCtrl.save);

module.exports = router;
