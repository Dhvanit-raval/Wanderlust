const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing");
const geocode = require("../utils/geocode");
require("dotenv").config();

const MONGO_URL = "mongodb+srv://dhvanitraval538_db_user:DAIOwdz1NryAJoPt@wanderlust.noqdkff.mongodb.net";
const DEFAULT_GEOMETRY = {
    type: "Point",
    coordinates: [77.170967, 32.239632],
};

main().catch(err => {
    console.error("Error connecting to MongoDB:", err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB");
    await initDB();
    await mongoose.disconnect();
}

const initDB = async () => {
    await Listing.deleteMany({});

    const seedData = await Promise.all(
        initdata.data.map(async (obj) => {
            const geocodingData = await geocode(obj.location || obj.title);
            const geometry = geocodingData?.features?.[0]?.geometry ?? obj.geometry ?? DEFAULT_GEOMETRY;

            return {
                ...obj,
                owner: "6a704ef438115a982edecd6a",
                geometry,
            };
        })
    );

    await Listing.insertMany(seedData);
    console.log("Database initialized with sample data");
}

