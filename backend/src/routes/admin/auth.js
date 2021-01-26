const express = require("express");
const {
  validateSignUpRequest,
  isRequestValidated,
  validateSignInRequest,
} = require("../../validators/auth");
const { signup, signin, signout } = require("../../controller/admin/auth");
const { requireSignin } = require("../../middleware/middleware");

const router = express.Router();

router.post("/admin/signin", validateSignInRequest, isRequestValidated, signin);
router.post("/admin/signup", validateSignUpRequest, isRequestValidated, signup);
router.post("/admin/signout", signout);

module.exports = router;
