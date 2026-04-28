# CommunityHub API 🚀

A professional, modular Node.js and Express API built during Week 10.

## 🛠️ Features
- **Modular Architecture:** Clean separation of Routes, Controllers, and Middleware.
- **Posts API:** Complete CRUD functionality for community posts.
- **User API:** User management with email validation.
- **Day 1-5 Challenges:** Includes server time, advanced filtering, and a nested comments system.
- **Environment Safety:** Configured for `.env` variables and `.gitignore` protection.

## 📍 API Endpoints

### 🕒 General
- `GET /api/time` - Check current server time.
- `GET /api/health` - API health check.

### 📝 Posts
- `GET /api/posts` - Get all posts (Supports `?search=title` and `?author=name`).
- `POST /api/posts` - Create a new post.
- `GET /api/posts/:id/comments` - View comments on a post.

### 👥 Users
- `GET /api/users` - List all registered users.
- `POST /api/users` - Register a new user.

## ⚙️ How to Run
1. Clone the repository.
2. Run `npm install` to get dependencies.
3. Create a `.env` file with `PORT=3000`.
4. Start the server with `node server.js`.

---
*Built with ❤️ during the Week 10 Backend Challenge.*
