const express = require('express');
const router = express.Router();
const { createOrder, getMyOrders } = require('../controllers/orderController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/', protect, createOrder);
router.get('/me', protect, getMyOrders);

module.exports = router;
