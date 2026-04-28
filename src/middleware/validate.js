// src/middleware/validate.js

const validatePost = (req, res, next) => {
    const { title, content, author } = req.body;

    // Check if the body exists and has the required fields
    if (!title || !content || !author) {
        return res.status(400).json({
            error: 'Validation Failed',
            message: 'Title, content, and author are required fields.'
        });
    }

    // If everything is fine, move to the next function
    next();
};

module.exports = {
    validatePost
};
