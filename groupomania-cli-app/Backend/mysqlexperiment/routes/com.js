const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const comCtrl = require('../controllers/com');

router.use(bodyParser.json());

router.post('/save_com', comCtrl.createCom);
router.put('/update_com', comCtrl.updateCom);
router.use('/delete_com', comCtrl.deleteCom);

module.exports = router;