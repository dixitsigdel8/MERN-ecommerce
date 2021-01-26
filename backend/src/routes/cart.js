const express = require("express");
const { addItemtoCart } = require("../controller/cart");
const { requireSignin, userMiddleware } = require("../middleware/middleware");
const router = express.Router();

router.post(
  "/user/cart/addtocart",
  requireSignin,
  userMiddleware,
  addItemtoCart
);

module.exports = router;
