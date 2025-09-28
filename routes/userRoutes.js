const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const { getProfile, updateProfile, deleteProfile } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/register', register);
router.post('/login', login);

router.get('/profile', protect, getProfile);
router.put('/profile', protect, updateProfile);
router.delete('/profile', protect, deleteProfile);

module.exports = router;
