// src/data/store.js

module.exports = {
    // Initial posts data with comments array for Day 5
    posts: [
        { 
            id: 1, 
            title: "Getting Started with Node.js", 
            content: "Node.js is a JavaScript runtime built on Chrome's V8 engine.",
            author: "John Doe",
            createdAt: new Date().toISOString(),
            likes: 10,
            comments: [
                { id: 1, text: "Great post! Very helpful.", author: "Sheila" }
            ]
        },
        { 
            id: 2, 
            title: "Express.js Fundamentals", 
            content: "Express is a minimal and flexible Node.js web application framework.",
            author: "Jane Smith",
            createdAt: new Date().toISOString(),
            likes: 15,
            comments: []
        }
    ],
    
    // Counter for new posts
    nextId: 3,

    // Initial users data for Day 2
    users: [
        { id: 1, name: "Sheila", email: "sheila@example.com" },
        { id: 2, name: "Admin", email: "admin@communityhub.com" }
    ],
    
    // Counter for new users
    nextUserId: 3
};
