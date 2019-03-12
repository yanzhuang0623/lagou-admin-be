const express = require('express');
const router = express.Router();
const positionCtrl = require('../controller/positionCtrl');
const uploadFile = require('../middleware/uploadfile');  //解析文件中间件

/* GET users listing. */
router.post('/save',uploadFile, positionCtrl.save);
router.post('/list', positionCtrl.list)

module.exports = router;
