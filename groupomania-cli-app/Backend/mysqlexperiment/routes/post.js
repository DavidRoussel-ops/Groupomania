const express = require('express');
const router = express.Router();
const userToken = require('../Security/token');
const multer = require('../middleware/multer');
const postCtrl = require('../controllers/post');

try {
    router.get('/', userToken, postCtrl.allPost);
    router.post('/', userToken, postCtrl.createPost);
    router.put('/:id', userToken, postCtrl.updatePost);
    router.delete('/:id', userToken, postCtrl.deletePost);

    router.get('/:id/comment', userToken, postCtrl.comment);
    router.post('/:id/comment', userToken, postCtrl.createCom);
    router.put('/comment/:id', userToken, postCtrl.updateCom);
    router.delete('/comment/:id', userToken, postCtrl.deleteCom);
} catch (error) {
    console.log(error);
}

module.exports = router;