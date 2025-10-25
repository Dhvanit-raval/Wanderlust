const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");


const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        url: String,
        filename: String
    },
    price: Number,
    location: String,
    country: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    category: {
        type: String,
        enum: ["Trending", "Rooms", "Iconic Cities", "Mountains", "Amazing Pools", "Beach", "Amazing View", "Lakefront", "Camping", "Farms", "Arctic"]
    },
    geometry: {// To store the coordinates with help of mongoose geojson  
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
});

listingSchema.index({ geometry: '2dsphere' });

listingSchema.post("findOneAndDelete", async function (listing) {// middleware to delete all reviews associated with a listing when the listing is deleted
    if (listing) { // If a listing was found and deleted then only delete its reviews
        await Review.deleteMany({ _id: { $in: listing.reviews } });// delete all reviews whose _id is in listing.reviews array
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;