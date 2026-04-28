require('dotenv').config(); // Load the .env file

const app = require('./src/app');

// Use the PORT from .env, or 3000 as a backup
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.listen(PORT, () => {
    console.log(`🚀 Server running in ${NODE_ENV} mode on port ${PORT}`);
});
