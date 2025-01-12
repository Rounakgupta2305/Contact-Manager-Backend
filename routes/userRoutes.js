const express = require("express");
const router = express.Router();
const validateToken = require("../middleware/tokenHandler");
const {
  registerUser, 
  loginUser, 
  currentUser
} = require("../controllers/userController");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/current").get(validateToken, currentUser);

module.exports = router;
