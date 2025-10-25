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





