const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const postCtrl = require('../controllers/post');

router.use(bodyParser.json());

router.post('/save_post', postCtrl.createPost);
router.put('/update_post', postCtrl.updatePost);
router.delete('/delete_post', postCtrl.deletePost);

module.exports = router;