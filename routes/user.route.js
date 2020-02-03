const express = require('express');
const router = express.Router();
const userController = require("./controllers/user.controller.js");

//post method for signup
router.post("/signup", userController.signup);

//post method for signin
router.post("/signin", userController.signin);

router.get("/", userController.retrieveuser);

module.exports = router;