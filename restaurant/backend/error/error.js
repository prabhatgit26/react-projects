// Define the ErrorHandler class

class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

// Define the error middleware
export const errorMiddleware = (err, req, res, next) => {
    console.error("Error details:", err); // Log the error details

    // Default to internal server error if no status code is provided
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    // Respond with error message
    // res.status(err.statusCode).json({ success: false, message: err.message});
    res.status(err.statusCode).json({ success: false, message: err.message });
};

// Export ErrorHandler class for use in other files if needed
export default ErrorHandler;
