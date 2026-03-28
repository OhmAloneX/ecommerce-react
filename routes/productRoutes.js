const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");



// INSERT PRODUCT
router.post("/products", productController.createProduct);

module.exports = router;