const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController");

// ORDER ROUTE
router.post("/order", orderController.placeOrder);

module.exports = router;