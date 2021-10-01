const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

router.post('/save_user', userCtrl.createUser);
router.put('/update_user', userCtrl.updateUser);
router.delete('/delete_user', userCtrl.deleteUser);

module.exports = router;