const express = require('express');
const router = express.Router();
const { createSeller, getMyProducts } = require('../controllers/sellerController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/', protect, createSeller);
router.get('/me/products', protect, getMyProducts);

module.exports = router;
