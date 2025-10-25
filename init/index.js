const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing");

const MONGO_URL = "mongodb://localhost:27017/wanderlust";

main()
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.error("Error connecting to MongoDB:", err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initdata.data = initdata.data.map((obj) => ({ ...obj, owner: "68ef73510d284bf28826600f" }));
    await Listing.insertMany(initdata.data);
    console.log("Database initialized with sample data");
}

initDB();

