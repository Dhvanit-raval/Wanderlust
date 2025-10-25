const joi = require("joi");
// Joi is a powerful schema description language and data validator for JavaScript. It allows you to define and validate the structure of JavaScript objects, making it easier to ensure that data conforms to expected formats and types.

module.exports.listingSchema = joi.object({
    listing: joi.object({
        title: joi.string().required(), 
        description: joi.string().required(),
        image: joi.string().allow(""),
        price: joi.number().min(0).required(),
        location: joi.string().required(),
        country: joi.string().required(),
    }).required()
});

module.exports.reviewSchema = joi.object({
    review: joi.object({
        rating: joi.number().min(1).max(5).required(),
        comment: joi.string().required(),
    }).required()
}); 