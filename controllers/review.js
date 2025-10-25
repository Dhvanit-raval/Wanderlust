const Review = require("../models/review.js");  
const Listing = require("../models/listing"); 

module.exports.createReview = async (req, res) => {// create a new review
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;// set the author of the review to the currently logged in user
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    req.flash("success", "Created new review");
    // console.log("New Review Added");
    res.redirect(`/listings/${listing._id}`);
};

module.exports.deleteReview = async (req, res) => {// delete a review
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });// remove reference from listing
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Successfully deleted review");
    res.redirect(`/listings/${id}`);
};