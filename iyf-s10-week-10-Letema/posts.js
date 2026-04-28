const express = require('express');
const app = express();
const PORT = 3000;

// ==========================================
// 1. SETUP & MIDDLEWARE (Runs on every request)
// ==========================================

// Built-in Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Custom Error Class (for Exercise 20.2)
class ApiError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

// Logger Middleware
const logger = (req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next(); 
};
app.use(logger);

// Validation Middleware (Exercise 20.2)
const validatePost = (req, res, next) => {
    const { title, content, author } = req.body;
    const errors = [];
    
    if (!title || title.length < 3) errors.push('Title must be at least 3 characters');
    if (!content || content.length < 10) errors.push('Content must be at least 10 characters');
    if (!author) errors.push('Author is required');
    
    if (errors.length > 0) return res.status(400).json({ errors });
    next();
};

// ==========================================
// 2. DATA STORE
// ==========================================

let posts = [
    { id: 1, title: "Getting Started with Node.js", content: "Node.js is a JavaScript runtime...", author: "John Doe", likes: 10 },
    { id: 2, title: "Express.js Fundamentals", content: "Express is a web framework...", author: "Jane Smith", likes: 15 }
];
let nextId = 3;

// ==========================================
// 3. ROUTES
// ==========================================

// Error Test Route
app.get('/api/error-test', (req, res, next) => {
    try {
        throw new ApiError('Manual Error Triggered!', 500);
    } catch (error) {
        next(error); 
    }
});

// GET all posts
app.get('/api/posts', (req, res) => {
    res.json(posts);
});

// POST create new post (Now uses Validation Middleware!)
app.post('/api/posts', validatePost, (req, res) => {
    const { title, content, author } = req.body;
    
    const newPost = {
        id: nextId++,
        title,
        content,
        author,
        createdAt: new Date().toISOString(),
        likes: 0
    };
    
    posts.push(newPost);
    res.status(201).json(newPost);
});

// PATCH like a post
app.patch('/api/posts/:id/like', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);
    if (!post) return next(new ApiError('Post not found', 404));
    
    post.likes++;
    res.json(post);
});

// ==========================================
// 4. ERROR HANDLING (Must be LAST, above app.listen)
// ==========================================

app.use((err, req, res, next) => {
    console.error(err.stack);
    
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    
    res.status(statusCode).json({
        error: {
            message,
            status: statusCode
        }
    });
});

// ==========================================
// 5. START SERVER
// ==========================================

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
