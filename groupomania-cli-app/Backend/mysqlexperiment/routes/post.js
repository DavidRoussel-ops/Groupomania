const express = require('express');
const router = express.Router();
const userToken = require('../Security/token');
const multer = require('../middleware/multer');
const postCtrl = require('../controllers/post');

try {
    router.get('/', postCtrl.allPost);
    router.post('/', postCtrl.createPost);
    router.put('/:id', userToken, postCtrl.updatePost);
    router.delete('/:id', userToken, postCtrl.deletePost);

    router.get('/:id/comments', postCtrl.comment);
    router.post('/:id/comments', postCtrl.createCom);
    router.put('/comments/:id', userToken, postCtrl.updateCom);
    router.delete('/comments/:id', userToken, postCtrl.deleteCom);
} catch (error) {
    console.log(error);
}

module.exports = router;