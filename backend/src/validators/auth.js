const { check, validationResult } = require("express-validator");

exports.validateSignUpRequest = [
  check("firstname").notEmpty().withMessage("First Name is required"),
  check("lastname").notEmpty().withMessage("lastname is required "),
  check("email").isEmail().withMessage("Valid email is required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least six character"),
];
exports.validateSignInRequest = [
  check("email").isEmail().withMessage("Valid email is required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least six character"),
];

exports.isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    return res.status(400).json({ errors: errors.array()[0].msg });
  }
  next();
};
