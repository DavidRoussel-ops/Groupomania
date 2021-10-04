const express = require('express');
const router = express.Router();
const {showPost, showPostById, createPost, updatePost, deletePost} = require('../controllers/post');

router.get('/post', showPost);
router.get('/post/:id', showPostById);
router.post('/post', createPost);
router.put('/post/:id', updatePost);
router.delete('/post/:id', deletePost);

module.exports = router;