// Utility function to wrap async route handlers and pass errors to next()
module.exports = (fn) => { // fn is an async function that returns a promise
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    }
} 