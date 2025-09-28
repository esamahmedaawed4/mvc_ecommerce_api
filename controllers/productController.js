const Product = require('../models/productModel');
const Seller = require('../models/sellerModel');

exports.getProducts = async (req, res, next) => {
  try {
    const { q } = req.query;
    let filter = {};
    if (q) {
      filter = { $or: [{ name: new RegExp(q, 'i') }] };
    }
    const products = await Product.find(filter).populate('seller', 'name');
    res.json(products);
  } catch (err) { next(err); }
};

exports.getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id).populate('seller', 'name');
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) { next(err); }
};

exports.createProduct = async (req, res, next) => {
  try {
    const seller = await Seller.findOne({ user: req.user._id });
    if (!seller) return res.status(403).json({ message: 'Create a seller profile first' });

    const product = await Product.create({ ...req.body, seller: seller._id });
    res.status(201).json(product);
  } catch (err) { next(err); }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Not found' });
    // ensure owner
    const seller = await Seller.findOne({ user: req.user._id });
    if (!seller || product.seller.toString() !== seller._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    Object.assign(product, req.body);
    await product.save();
    res.json(product);
  } catch (err) { next(err); }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Not found' });
    const seller = await Seller.findOne({ user: req.user._id });
    if (!seller || product.seller.toString() !== seller._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    await product.remove();
    res.json({ message: 'Deleted' });
  } catch (err) { next(err); }
};
