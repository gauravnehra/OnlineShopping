const express = require('express');
const router = express.Router();
const userController = require("../controllers/user.controller.js");
const auth = require('../middlewares/auth.js');

//post method for signup
router.post("/signup", userController.signup);

//post method for signin
router.post("/signin", userController.signin);

//post method for signout
router.post("/signout", auth, userController.signout);

router.get("/", auth, userController.retrieveuser);

module.exports = router;