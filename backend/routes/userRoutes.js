const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
// const contactController = require("../controllers/contactController")

// SIGNUP
router.get("/", userController.createUser);
router.post("/", userController.createUser);

// LOGIN
router.get("/login", userController.loginUser);
router.post("/login", userController.loginUser);


// router.post("/contact", contactController.createMessage)

module.exports = router;

