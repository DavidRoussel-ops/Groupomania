const express = require('express');
const router = express.Router();
const {showUser, showUserById, createUser, updateUser, deleteUser} = require("../controllers/user");

router.get('/all', showUser);
router.get('/:id', showUserById);
router.post('/create', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;