const express = require('express');
const router = express.Router();
const { getMyCart, updateCart } = require('../controllers/cartController');
const { protect } = require('../middlewares/authMiddleware');

router.get('/', protect, getMyCart);
router.put('/', protect, updateCart);

module.exports = router;
