# WanderLust

![Node.js](https://img.shields.io/badge/Node.js-24.x-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.1-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-Templates-B4CA65?style=for-the-badge)
![Cloudinary](https://img.shields.io/badge/Cloudinary-Image_Uploads-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
![MapLibre](https://img.shields.io/badge/MapLibre-Interactive_Maps-396CB2?style=for-the-badge)

WanderLust is a full-stack vacation rental marketplace built with Express, MongoDB, EJS, Passport authentication, Cloudinary image uploads, and MapLibre maps. Users can browse destination listings, search and filter by category, create property listings, upload images, view location maps, and leave reviews.

## Features

- User registration, login, logout, and persistent sessions with Passport.
- Listing CRUD with owner-only edit and delete permissions.
- Cloudinary-backed image upload for property photos.
- Search across title, location, and country.
- Category filtering for travel styles such as beach, mountains, farms, camping, lakefront, and more.
- Review creation and deletion with author-only permissions.
- Joi validation for listing and review forms.
- Flash messages for success and error feedback.
- GeoJSON coordinates stored in MongoDB with a `2dsphere` index.
- Location geocoding through OpenStreetMap Nominatim.
- Interactive MapLibre listing map with marker and navigation controls.
- EJS layouts and reusable partials for server-rendered pages.

## Tech Stack

| Layer | Tools |
| --- | --- |
| Runtime | Node.js 24.x |
| Server | Express 5, method-override, cookie-parser |
| Views | EJS, ejs-mate |
| Database | MongoDB, Mongoose, connect-mongo |
| Auth | Passport, passport-local, passport-local-mongoose |
| Validation | Joi |
| Uploads | Multer, multer-storage-cloudinary, Cloudinary |
| Maps | MapLibre GL JS, OpenFreeMap tiles, Nominatim geocoding |
| UX | Bootstrap-style server-rendered pages, flash messages, custom CSS |

## Project Structure

```text
WanderLust/
|-- app.js                  # Express app, database connection, sessions, routes
|-- cloudConfig.js          # Cloudinary + Multer storage configuration
|-- middleware.js           # Auth, authorization, and validation middleware
|-- schema.js               # Joi validation schemas
|-- controllers/            # Route handlers for listings, reviews, and users
|-- models/                 # Mongoose models
|-- routes/                 # Express routers
|-- views/                  # EJS pages, layouts, and partials
|-- public/                 # Client-side CSS and JavaScript
|-- utils/                  # Error wrapper, custom error class, geocoding helper
|-- init/                   # Seed data and initialization script
|-- migration/              # Data migration scripts
`-- Images/                 # Local image assets
```

## Getting Started

### Prerequisites

- Node.js 24.x
- npm
- MongoDB Atlas database or a MongoDB connection string
- Cloudinary account

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

### Run Locally

The project does not currently define a `start` script, so run the server directly:

```bash
node app.js
```

Then open:

```text
http://localhost:8080
```

## Main Routes

| Method | Route | Description |
| --- | --- | --- |
| GET | `/` | Redirects to `/listings` |
| GET | `/listings` | Show all listings, with optional search or category filter |
| POST | `/listings` | Create a listing with image upload |
| GET | `/listings/new` | Render new listing form |
| GET | `/listings/search` | Search listings |
| GET | `/listings/:id` | Show listing details, reviews, owner, and map |
| PUT | `/listings/:id` | Update owner-owned listing |
| DELETE | `/listings/:id` | Delete owner-owned listing |
| GET | `/listings/:id/edit` | Render edit listing form |
| POST | `/listings/:id/reviews` | Create a review |
| DELETE | `/listings/:id/reviews/:reviewId` | Delete author-owned review |
| GET/POST | `/signup` | Register a new user |
| GET/POST | `/login` | Authenticate a user |
| GET | `/logout` | End the current session |

## Data Models

### Listing

Listings include title, description, image metadata, price, location, country, category, owner, reviews, and GeoJSON geometry.

Supported categories:

```text
Trending, Rooms, Iconic Cities, Mountains, Amazing Pools, Beach,
Amazing View, Lakefront, Camping, Farms, Arctic
```

### Review

Reviews include a comment, rating from 1 to 5, creation date, and author reference.

### User

Users are managed with `passport-local-mongoose`, including username/password authentication and email storage.

## Notes

- Listing images are uploaded to the `WanderLust` folder in Cloudinary.
- The app stores sessions in MongoDB using `connect-mongo`.
- If geocoding fails, a default coordinate is used so the listing can still be saved.
- Deleting a listing also deletes its associated reviews through Mongoose middleware.
- The current `npm test` script is a placeholder and does not run automated tests yet.

## License

This project is licensed under the ISC License.
