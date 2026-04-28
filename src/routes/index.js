// src/routes/index.js
const express = require('express');
const router = express.Router();

const postsRoutes = require('./posts');
const usersRoutes = require('./users');

// Connect the other route files
router.use('/posts', postsRoutes);
router.use('/users', usersRoutes);

// --- DAY 1 CHALLENGE ROUTES ---

// 1. Welcome Message
router.get('/', (req, res) => {
    res.send('Welcome to the CommunityHub API! 🚀');
});

// 2. About Page
router.get('/about', (req, res) => {
    res.send('CommunityHub is a platform for developers.');
});

// 3. API Time (This is the one you are missing!)
router.get('/time', (req, res) => {
    res.json({ 
        currentTime: new Date().toLocaleTimeString(),
        date: new Date().toDateString() 
    });
});

// Health check
router.get('/health', (req, res) => {
    res.json({ status: 'OK' });
});

module.exports = router;
