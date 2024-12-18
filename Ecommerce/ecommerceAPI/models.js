const mongoose = require("mongoose");

const productCategory = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});

const ProductCategory = mongoose.model("ProductCategory", productCategory);

module.exports=ProductCategory;