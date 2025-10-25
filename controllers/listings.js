const Listing = require("../models/listing");
const geocode = require("../utils/geocode");

module.exports.index = async (req, res) => {// index controller to list all listings
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}

module.exports.newListingForm = (req, res) => {// controller to render form for new listing
    res.render("listings/new.ejs");
}

module.exports.showListing = async (req, res) => {// controller to show details of a specific listing
    const { id } = req.params;
    const listing = await Listing.findById(id).populate({
        path: "reviews",
        populate: {// nested to get author details of each review
            path: "author"
        },
    }).populate("owner");// populate reviews and owner details
    if (!listing) {
        req.flash("error", "Cannot find that listing");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
}

// const geocode = require('../utils/geocode');

module.exports.createListing = async (req, res) => {
    try {
        const url = req.file.path;
        let filename = req.file.filename;

        // Enable geocoding
        const geocodingData = await geocode(req.body.listing.location);
        console.log("Geocoding result:", geocodingData); // DEBUG

        const newListing = new Listing(req.body.listing);

        if (geocodingData && geocodingData.features && geocodingData.features.length > 0) {
            newListing.geometry = geocodingData.features[0].geometry;
            console.log("Setting geometry:", newListing.geometry); // DEBUG
        } else {
            newListing.geometry = {
                type: 'Point',
                coordinates: [77.170967, 32.239632]
            };
            req.flash("error", "Could not determine coordinates for the location. Using default coordinates.");
        }

        newListing.owner = req.user._id;
        newListing.image = { url, filename };

        await newListing.save();
        console.log("Listing saved with geometry:", newListing.geometry); // DEBUG

        req.flash("success", "Successfully made a new listing!");
        res.redirect("/listings");
    } catch (error) {
        console.error("Error creating listing:", error);
        req.flash("error", "Failed to create listing");
        res.redirect("/listings/new");
    }
};

module.exports.editListingForm = async (req, res) => { // controller to render form to edit an existing listing
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        res.flash("error", "Listing you requested for does not exist!");
        res.redirect("/listings");
    }

    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_300,w_250");
    res.render("listings/edit.ejs", { listing, originalImageUrl });
}

module.exports.updateListing = async (req, res) => { // controller to update a specific listing
    const { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    if (typeof req.file !== "undefined") {// To check if the file is uploded or not or is it undefined
        let url = req.file.path; // get the URL of the uploaded image from Cloudinary
        let filename = req.file.filename; // get the filename of the uploaded image from Cloudinary
        listing.image = { url, filename };
        await listing.save();
    }
    req.flash("success", "Successfully updated listing!");
    req.flash("error", "Cannot find that listing");
    res.redirect(`/listings/${id}`);
}

module.exports.deleteListing = async (req, res) => { // controller to delete a specific listing
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Successfully deleted listing");
    res.redirect("/listings");
}

module.exports.index = async (req, res) => {
    const category = req.query.category;// To fetch the data passing by the user in category section
    let filter = {};
    if (category) { // To store the value of category user have clicked into the filter array
        filter.category = category;
    }

    const allListings = await Listing.find(filter);// To find the listing based on the keyword we provided in our models enum

    if (allListings.length == 0 && category) {
        req.flash("error", `No listing found in the ${category} category`);// Check if the listing is empty 
    }

    res.render("listings/index", {
        allListings,
        currentCategory: category
    });
};

module.exports.search = async (req, res) => {
    const searchTerm = req.query.search;// To fetch the user data of search box
    if (!searchTerm) {// To check wheather seacrh term exixts if not return error and redirect to listings
        req.flash("error", "Please entre a destination to search");
        return res.redirect("/listings");
    }
    const regex = new RegExp(searchTerm, 'i');//For case insensitive 

    const searchFilter = {
        $or: [// Checking the listings with logical or operator
            { location: { $regex: regex } },
            { country: { $regex: regex } },
            { title: { $regex: regex } },
        ]
    };

    const allListings = await Listing.find(searchFilter);//To find the listing that matches thew search

    if (allListings.length === 0) {
        req.flash("error", `No listing found matching "${searchTerm}".`);// Check if the listing is empty 
    }

    res.render("listings/index", { allListings, searchTerm, currentCategory: "" });
};