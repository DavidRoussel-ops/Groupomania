const express = require('express');
const router = express.Router();
const userToken = require('../Security/token');
const {signup, login, showUser, showUserById, updateUser, deleteUser} = require("../controllers/user");

router.get('/all', showUser);
router.get('/info', userToken, showUserById);
router.post('/create', signup);
router.post('/login', login);
router.put('/update', userToken, updateUser);
router.delete('/delete',userToken, deleteUser);

module.exports = router;