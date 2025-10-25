require("dotenv").config();// Load environment variables from .env file in development mode
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressErr = require("./utils/Expresserr.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

// Route files
const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const usersRouter = require("./routes/user.js");

// Middleware
app.engine("ejs", ejsMate);// for using ejs-mate as the template engine
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

const dbUrl = process.env.ATLASDB_URL
main()
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.error("Error connecting to MongoDB:", err);
    });

async function main() {
    await mongoose.connect(dbUrl);
}

//Mongo-store
const store = MongoStore.create({// To pass the session information to express session options
    mongoUrl: dbUrl,
    crypto: { //Encryption 
        secret: process.env.SECRET,
        touchAfter: 24 * 3600,// To update the session if not made the changes under 24hrs
    }
});

// Session Configuration
const sessionOptions = {
    store: store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,

    cookie: {
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // 1 week from now
        maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
        httpOnly: true // cookie cannot be accessed via client-side scripts
    },
}

// app.get("/", (req, res) => {
//     res.send("Welcome to WanderLust");
// });

app.use(session(sessionOptions));
app.use(flash());

// Passport Configuration
app.use(passport.initialize());
app.use(passport.session());// This is used for persistent login sessions
passport.use(new LocalStrategy(User.authenticate()));// authenticate method is added by passport-local-mongoose
passport.serializeUser(User.serializeUser());// how to store user in session
passport.deserializeUser(User.deserializeUser());// how to get user from session

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currentUser = req.user; // req.user is added by passport and contains the authenticated user
    next();
});

// app.get("/demouser", async (req, res) => {
//     let fakeuser = new User({
//         username: "appu",
//         email: "appu@example.com"
//     });
//     let registeredUser = await User.register(fakeuser, "helloworld");// register method is added by passport-local-mongoose
//     // hash the password and store the hash and salt value in the database
//     console.log(registeredUser);
//     res.send("User created");
// });


app.use("/listings", listingsRouter); // use the listings router for all /listings routes
app.use("/listings/:id/reviews", reviewsRouter); // use the reviews router for all /listings/:id/reviews routes
app.use("/", usersRouter); // use the users router for all / routes

// Temporary route to add sample reviews 
app.get('/add-sample-reviews', async (req, res) => {
    try {
        const Listing = require('./models/listing');
        const Review = require('./models/review');

        // Get all listings
        const listings = await Listing.find({});

        // Sample reviews data with different authors
        const sampleReviews = [
            // User 1 reviews
            { rating: 5, comment: "Absolutely stunning! The views were breathtaking and the host was incredibly welcoming.", author: "68fd23372290001e39d819e9" },
            { rating: 4, comment: "Great location and comfortable stay. Would definitely recommend to friends!", author: "68fd23372290001e39d819e9" },
            { rating: 5, comment: "Perfect getaway! Everything was exactly as described. Will come back again!", author: "68fd23372290001e39d819e9" },

            // User 2 reviews
            { rating: 4, comment: "Lovely place with amazing amenities. The pool was fantastic and rooms were spacious.", author: "68fd22e22290001e39d819e2" },
            { rating: 3, comment: "Good place overall, but could use some improvements in cleanliness. Location was convenient.", author: "68fd22e22290001e39d819e2" },
            { rating: 5, comment: "Exceeded all expectations! The host went above and beyond to make our stay memorable.", author: "68fd22e22290001e39d819e2" },

            // User 3 reviews
            { rating: 4, comment: "Beautiful property with great amenities. The sunset views were absolutely spectacular!", author: "68fd21892290001e39d819ce" },
            { rating: 5, comment: "Best vacation ever! The place was even better than the photos. Highly recommended!", author: "68fd21892290001e39d819ce" },
            { rating: 4, comment: "Comfortable and clean. Great value for money. The host was very responsive to our needs.", author: "68fd21892290001e39d819ce" },

            // Additional mixed reviews
            { rating: 5, comment: "Absolutely magical experience! The attention to detail was impressive. Can't wait to return!", author: "68fd23372290001e39d819e9" },
            { rating: 4, comment: "Great value for the price. The location was perfect for exploring the area.", author: "68fd22e22290001e39d819e2" },
            { rating: 5, comment: "Perfect for a romantic getaway! The ambiance was just what we needed.", author: "68fd21892290001e39d819ce" },
            { rating: 3, comment: "Decent place but had some maintenance issues. Hope they fix them soon.", author: "68fd23372290001e39d819e9" },
            { rating: 4, comment: "Family-friendly and spacious. Kids loved the outdoor area!", author: "68fd22e22290001e39d819e2" },
            { rating: 5, comment: "Couldn't have asked for a better stay! Everything was perfect from start to finish.", author: "68fd21892290001e39d819ce" }
        ];


        for (let listing of listings) {
            const numReviews = Math.floor(Math.random() * 3) + 2;

            // Shuffle and select random reviews
            const shuffledReviews = [...sampleReviews].sort(() => 0.5 - Math.random());
            const selectedReviews = shuffledReviews.slice(0, numReviews);

            // Create review documents
            const reviewDocs = await Review.insertMany(selectedReviews);

            // Get review IDs and add to listing
            const reviewIds = reviewDocs.map(review => review._id);
            listing.reviews.push(...reviewIds);
            await listing.save();
        }

        res.send('Sample reviews added successfully to all listings with multiple users!');
    } catch (error) {
        res.send('Error adding reviews: ' + error.message);
    }
});

app.use((req, res, next) => {// for all HTTP verbs
    next(new ExpressErr(404, "Page Not Found!"));
});

app.use((err, req, res, next) => {// err is the object passed from next()
    let { statusCode = 500, message = "Internal Server Error" } = err;
    res.status(statusCode).render("error.ejs", { message });// render the error page with the message
    // res.status(statusCode).send(message);
});


app.listen(8080, () => {
    console.log("Server is running on port 8080");
});







