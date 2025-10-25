const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingsController = require("../controllers/listings");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router
    .route("/")
    .get(wrapAsync(listingsController.index))
    .post(isLoggedIn,
        upload.single("listing[image]"),
        validateListing,
        wrapAsync(listingsController.createListing)
    );

router.get("/new", isLoggedIn, listingsController.newListingForm);

// MOVE SEARCH ROUTE ABOVE DYNAMIC ROUTES
router.get("/search", listingsController.search);

router.route("/:id")
    .get(wrapAsync(listingsController.showListing))
    .put(isLoggedIn,
        isOwner,
        upload.single("listing[image]"),
        validateListing,
        wrapAsync(listingsController.updateListing)
    )
    .delete(isLoggedIn,
        isOwner,
        wrapAsync(listingsController.deleteListing)
    );

router.get("/:id/edit", isLoggedIn, wrapAsync(listingsController.editListingForm));

module.exports = router;