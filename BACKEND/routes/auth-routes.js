
const express = require("express");
const router = express.Router();
const authController = require('../controller/auth-controller');
const signupSchema=require("../validator/auth-validator");
const validate=require("../middleware/validate-middleware");
const authMiddleware = require("../middleware/authmiddleware");

router.route("/").get(authController.home);

router.route("/signup").post(validate(signupSchema),authController.signup);
router.route("/login").post(authController.login);
router.route("/user").get(authMiddleware, authController.user);

module.exports = router;