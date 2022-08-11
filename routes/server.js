const express = require("express");
const router = express.Router();
const { products } = require("../data/products");

router.get("/", (req, res) => {
  res.json("API RUNNING");
});

router.get("/api/products", (req, res) => {
  console.log(products);
  res.json(products);
});

router.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product);
});

module.exports = router;
