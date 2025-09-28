const Cart = require('../models/cartModel');

exports.getMyCart = async (req, res, next) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
    if (!cart) cart = { items: [] };
    res.json(cart);
  } catch (err) { next(err); }
};

exports.updateCart = async (req, res, next) => {
  try {
    const { items } = req.body; // expect [{ product, quantity }]
    let cart = await Cart.findOneAndUpdate({ user: req.user._id }, { items }, { upsert: true, new: true });
    res.json(cart);
  } catch (err) { next(err); }
};
