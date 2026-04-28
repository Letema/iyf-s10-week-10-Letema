// src/middleware/logger.js

const logger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.url;

    console.log(`[${timestamp}] ${method} request to: ${url}`);

    // This is like a "green light" - it tells the request to keep going
    next();
};

module.exports = logger;
