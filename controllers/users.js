const user = require("../models/user.js");


module.exports.renderSignupForm = (req, res) => {// render signup form
    res.render("users/signup.ejs");
};

module.exports.signup = (async (req, res) => {// signup a new user
    try {
        let { username, email, password } = req.body;
        let newUser = new user({ username, email });
        let registeredUser = await user.register(newUser, password);// register method is added by passport-local-mongoose
        // hash the password and store the hash and salt value in the database
        console.log(registeredUser);
        req.login(registeredUser, err => { // login method is added by passport
            if (err) {
                return next(err);
            } else {
                req.flash("success", "Welcome to WanderLust!");
                res.redirect("/listings");
            }
        });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
});

module.exports.renderLoginForm = (req, res) => {// render login form
    res.render("users/login.ejs");
};

module.exports.login = async (req, res) => {// login a user
    req.flash("success", "Welcome back!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    console.log(redirectUrl);
    res.redirect(redirectUrl);
};

module.exports.logout = (req, res) => {// logout a user
    req.logout(err => { // logout method is added by passport
        if (err) {
            return next(err);
        } else {
            req.flash("success", "Logged out successfully!");
            res.redirect("/listings");
        }
    });
};