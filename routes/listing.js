const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingsController = require("../controllers/listings");// Import the listings controller
const multer = require("multer");// For handling file uploads
const { storage } = require("../cloudConfig.js");// Import Cloudinary storage configuration
const upload = multer({ storage });// Configure multer to use Cloudinary storage



router
    .route("/")// Router for listings
    .get(wrapAsync(listingsController.index))// Index Route - List all listings
    .post(isLoggedIn,
        upload.single("listing[image]"),
        validateListing,
        wrapAsync(listingsController.createListing)
    );// Create Route - Create a new listing
 


// New Route - Form to create a new listing
router.get("/new", isLoggedIn, listingsController.newListingForm);

// Search Route - To search a specific 
router.get("/search", listingsController.search);

router.route("/:id")
    .get(wrapAsync(listingsController.showListing))// Show Route - Show details of a specific listing
    .put(isLoggedIn,
        isOwner,
        upload.single("listing[image]"),
        validateListing,
        wrapAsync(listingsController.updateListing)
    )// Update Route - Update a specific listing
    .delete(isLoggedIn,
        isOwner,
        wrapAsync(listingsController.deleteListing)
    );// Delete Route - Delete a specific listing



// Edit Route - Form to edit an existing listing
router.get("/:id/edit", isLoggedIn, wrapAsync(listingsController.editListingForm));
module.exports = router;