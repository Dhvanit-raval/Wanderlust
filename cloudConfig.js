const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({// Configure Cloudinary with credentials from environment variables
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

const storage = new CloudinaryStorage({// Set up Cloudinary storage for multer
    cloudinary: cloudinary,
    params: {
        folder: "WanderLust",
        allowed_formats: ["jpg", "png", "jpeg", "gif"]// Specify allowed image formats
    }
});
module.exports = { cloudinary, storage };// Export Cloudinary and storage configuration