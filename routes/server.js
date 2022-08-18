const express = require("express");
const router = express.Router();
// const { products } = require("../data/products");
const dotenv = require("dotenv");
const { occhiDB } = require("../mongo");
//const asyncHandler = require("express-async-handler");
//wrap asyncHandler for custom err messages
const colors = require("colors");
//adds colors to messages we think are important

dotenv.config();

// Fetch all products
// GET /server/api/products
// @access Public
// http://localhost:4000/server/api/products
router.get("/api/products", async (req, res) => {
  try {
    // .collection = method / mongodb node library
    const collection = await occhiDB().collection("products");
    const products = await collection.find({}).toArray();
    res.status(200).json({ message : products, success: true });
  } catch (e) {
    res
      .status(500)
      .json({ message: `Failed to load content ${e}`, success: false });
  }
});

// Fetch single product
// GET /server/api/products/:id
// @access Public
// http://localhost:4000/server/api/products/3
router.get("/api/products/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const collection = await occhiDB().collection("products");
    const product = await collection.findOne({ id: productId });
    res.status(200).json({ message : product, success: true });
  } catch (e) {
    console.log(e);
    res.status(404).json({ message: `Product not found ${e}`, success: false });
  }
});

module.exports = router;
