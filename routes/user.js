const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const usersController = require("../controllers/users");// Import the listings controller
const { saveRedirectUrl } = require("../middleware.js");

router.route("/signup")
    .get(usersController.renderSignupForm)// Render the signup form
    .post(wrapAsync(usersController.signup));// Handle user signup

router.route("/login")
    .get(usersController.renderLoginForm)// Render the login form
    .post(saveRedirectUrl, passport.authenticate("local", { failureFlash: true, failureRedirect: "/login" }), usersController.login);// Use passport-local-mongoose for authentication

router.get("/logout", usersController.logout);

module.exports = router;