const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String},
    type: { type: String, required: true },
    available: { type: Boolean, default: true }
  },
  { collection: 'product-data' }
);

module.exports = mongoose.model('Product', ProductSchema);
