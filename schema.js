const joi = require("joi");

module.exports.listingSchema = joi.object({
    listing: joi.object({
        title: joi.string().required(),
        description: joi.string().required(),
        image: joi.string().allow(""),
        price: joi.number().min(0).required(),
        location: joi.string().required(),
        country: joi.string().required(),
        category: joi.string().valid( // ADD THIS FIELD
            "Trending",
            "Rooms",
            "Iconic Cities",
            "Mountains",
            "Amazing Pools",
            "Beach",
            "Amazing View",
            "Lakefront",
            "Camping",
            "Farms",
            "Arctic"
        ).required() // Make it required
    }).required()
});

module.exports.reviewSchema = joi.object({
    review: joi.object({
        rating: joi.number().min(1).max(5).required(),
        comment: joi.string().required(),
    }).required()
});