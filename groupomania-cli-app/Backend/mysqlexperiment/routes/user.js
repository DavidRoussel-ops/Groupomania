const express = require('express');
const router = express.Router();
const {showUser, showUserById, createUser, updateUser, deleteUser} = require("../controllers/user");

router.get('/user', showUser);
router.get('/:id', showUserById);
router.post('/create', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

module.exports = router;