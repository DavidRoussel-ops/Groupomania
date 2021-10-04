const express = require('express');
const router = express.Router();
const {showUser, showUserById, createUser, updateUser, deleteUser} = require("../controllers/user");

router.get('/user', showUser);
router.get('/user/:id', showUserById);
router.post('/user', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

module.exports = router;