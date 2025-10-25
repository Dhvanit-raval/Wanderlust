const mongoose = require('mongoose');
const Listing = require('../models/listing');
const geocode = require('../utils/geocode');

const updateExistingListings = async () => {
    try {
        // Connect to your database (use your actual MongoDB connection string)
        await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Connected to MongoDB');

        // Find all listings that need geometry updates
        const listings = await Listing.find({
            $or: [
                { geometry: { $exists: false } },
                { 'geometry.coordinates': [0, 0] },
                { 'geometry.coordinates': [77.170967, 32.239632] }, // Your default coordinates
                { geometry: null }
            ]
        });

        console.log(`Found ${listings.length} listings to update`);

        let updatedCount = 0;
        let failedCount = 0;

        for (let i = 0; i < listings.length; i++) {
            const listing = listings[i];
            console.log(`\n[${i + 1}/${listings.length}] Updating: "${listing.title}" - ${listing.location}`);

            const geocodingData = await geocode(listing.location);

            if (geocodingData && geocodingData.features && geocodingData.features.length > 0) {
                listing.geometry = geocodingData.features[0].geometry;
                await listing.save();
                console.log(`✓ Updated coordinates: ${listing.geometry.coordinates}`);
                updatedCount++;
            } else {
                console.log(`✗ Failed to geocode: ${listing.location}`);
                failedCount++;
            }

            // Add delay to avoid API rate limits (1 second delay)
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        console.log('\n=== MIGRATION COMPLETED ===');
        console.log(`Total listings processed: ${listings.length}`);
        console.log(`Successfully updated: ${updatedCount}`);
        console.log(`Failed: ${failedCount}`);

        await mongoose.connection.close();
        console.log('Database connection closed');

    } catch (error) {
        console.error('Migration failed:', error);
        process.exit(1);
    }
};

// Run the migration
updateExistingListings();