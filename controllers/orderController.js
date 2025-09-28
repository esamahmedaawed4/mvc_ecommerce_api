const Order = require('../models/orderModel');

exports.createOrder = async (req, res, next) => {
  try {
    const { products, paymentMethod } = req.body; // products: [{product, quantity}]
    const order = await Order.create({ user: req.user._id, products, paymentMethod });
    res.status(201).json(order);
  } catch (err) { next(err); }
};

exports.getMyOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate('products.product');
    res.json(orders);
  } catch (err) { next(err); }
};
