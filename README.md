# Week 10: Backend Basics - CommunityHub API

A RESTful API built with **Node.js** and **Express** that serves as the backend for the CommunityHub platform. This project covers the fundamentals of server-side development, including CRUD operations, middleware, error handling, and modular architecture.

## 🚀 Features

- **RESTful API**: Full CRUD support for blog posts.
- **Middleware**: Custom logging, request timing, and authentication simulation.
- **Validation**: Robust data validation for creating and updating content.
- **Error Handling**: Centralized error management with custom `ApiError` classes.
- **Modular Structure**: Organized using the Controller-Route-Store pattern.
- **Environment Config**: Secure configuration using `dotenv`.

## 📁 Project Structure

```text
iyf-s10-week-10-yourusername/
├── src/
│   ├── controllers/    # Request handling logic
│   ├── data/           # In-memory data store
│   ├── middleware/     # Custom Express middleware
│   ├── routes/         # API route definitions
│   └── app.js          # Express app configuration
├── .env                # Environment variables (Private)
├── .env.example        # Example environment variables
├── .gitignore          # Files ignored by Git
├── server.js           # Entry point
└── package.json        # Dependencies and scripts
```

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd iyf-s10-week-10-yourusername
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   - Create a `.env` file in the root directory.
   - Copy content from `.env.example` and add your values.
   ```bash
   PORT=3000
   NODE_ENV=development
   ```

4. **Start the server:**
   ```bash
   node server.js
   ```

## 🛣️ API Endpoints

### Posts

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | `/api/posts` | Fetch all posts (supports `author`, `sort`) |
| GET | `/api/posts/:id` | Fetch a single post by ID |
| POST | `/api/posts` | Create a new post |
| PUT | `/api/posts/:id` | Update an existing post |
| PATCH | `/api/posts/:id/like` | Increment like count |
| DELETE | `/api/posts/:id` | Remove a post |

### Utilities

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | `/api/health` | Check API status and uptime |
| GET | `/api/time` | Returns server timestamp |

## 🧪 Testing
You can test the API using **Postman** or **Thunder Client**. 
- **Header:** Set `Content-Type: application/json` for POST/PUT requests.
- **Base URL:** `http://localhost:3000`

## ✅ Checklist Completed
- [x] Node.js Environment Setup
- [x] Express Server Creation
- [x] CRUD Operations (GET, POST, PUT, DELETE, PATCH)
- [x] Custom Middleware & Error Handling
- [x] Environment Variables configuration
- [x] Modular Project Refactoring
