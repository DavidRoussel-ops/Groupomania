const express = require('express');
const router = express.Router();
const {showPost, showPostById, createPost, deletePost} = require('../controllers/post');

router.get('/all', showPost);
router.get('/:id', showPostById);
router.post('/create', createPost);
router.delete('/delete', deletePost);

module.exports = router;