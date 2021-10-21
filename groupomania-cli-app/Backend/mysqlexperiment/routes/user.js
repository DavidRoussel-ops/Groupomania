const express = require('express');
const router = express.Router();
const userToken = require('../Security/token');
const multer = require('../middleware/multer');
const userCtrl = require("../controllers/user");

try {
    router.get('/id', userToken, userCtrl.showUserById);
    router.post('/create', userCtrl.signup);
    router.post('/login', userCtrl.login);
    router.put('/update', userToken, userCtrl.updateUser);
    router.delete('/delete', userCtrl.deleteUser);
} catch (error) {
    console.log(error);
}

module.exports = router;