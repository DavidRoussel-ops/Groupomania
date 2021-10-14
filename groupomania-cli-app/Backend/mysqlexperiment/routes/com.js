const express = require('express');
const router = express.Router();
const {showCom, createCom, deleteCom} = require('../controllers/com')

router.get('/all', showCom);
router.post('/create', createCom);
router.delete('/delete', deleteCom);

module.exports = router;