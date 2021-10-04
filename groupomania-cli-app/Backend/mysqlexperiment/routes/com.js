const express = require('express');
const router = express.Router();
const {showCom, showComById, createCom, updateCom, deleteCom} = require('../controllers/com')

router.get('/com', showCom);
router.get('/com/:id', showComById);
router.post('/com', createCom);
router.put('/com/:id', updateCom);
router.delete('/com/:id', deleteCom);

module.exports = router;