const Listing = require("./models/listing");
const Review = require("./models/review");
const ExpressErr = require("./utils/Expresserr.js");
const { listingSchema, reviewSchema } = require("./schema.js");

module.exports.isLoggedIn = (req, res, next) => { // Middleware to check if user is authenticated
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl; // store the url they are requesting
        req.flash("error", "You must be signed in first!");
        return res.redirect("/login");
    }
    next();

};

module.exports.saveRedirectUrl = (req, res, next) => { // Middleware to save the url they are requesting
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner = async (req, res, next) => { // Middleware to check if the current user is the owner of the listing
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing.owner.equals(req.user._id)) { // Ensure the current user is the owner before allowing update
        req.flash("error", "You are not authorized to do that!");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

module.exports.validateListing = (req, res, next) => { // Middleware to validate listing data using Joi schema
    let { error } = listingSchema.validate(req.body);
    if (error) {
        let errorMsg = error.details.map(el => el.message).join(", ");
        throw new ExpressErr(400, errorMsg);
    } else {
        next();
    }
};

module.exports.validateReview = (req, res, next) => { // Middleware to validate review data using Joi schema
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errorMsg = error.details.map(el => el.message).join(", ");
        throw new ExpressErr(400, errorMsg);
    } else {
        next();
    }
};

module.exports.isReviewAuthor = async (req, res, next) => { // Middleware to check if the current user is the author of the review
    const { id, reviewId } = req.params;
    const review = await Review.findById(reviewId);
    if (!review.author.equals(req.user._id)) { // Ensure the current user is the author before allowing deletion
        req.flash("error", "You are not authorized to do that!");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

