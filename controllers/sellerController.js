const Seller = require('../models/sellerModel');
const Product = require('../models/productModel');

exports.createSeller = async (req, res, next) => {
  try {
    const seller = await Seller.create({ name: req.body.name, user: req.user._id });
    res.status(201).json(seller);
  } catch (err) { next(err); }
};

exports.getMyProducts = async (req, res, next) => {
  try {
    const seller = await Seller.findOne({ user: req.user._id });
    if (!seller) return res.status(404).json({ message: 'No seller profile' });
    const products = await Product.find({ seller: seller._id });
    res.json(products);
  } catch (err) { next(err); }
};
