const express = require('express');
const router = express.Router();
const userToken = require('../Security/token');
const multer = require('../middleware/multer');
const userCtrl = require("../controllers/user");

try {
    router.post('/create', userCtrl.signup);
    router.post('/login', userCtrl.login);
    router.get('/', userToken, userCtrl.showUserById);
    router.put('/', userToken, userCtrl.updateUser);
    router.delete('/', userToken, userCtrl.deleteUser);
} catch (error) {
    console.log(error);
}

module.exports = router;