// custom error class for Express applications
class ExpressErr extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
    }
}

module.exports = ExpressErr; 