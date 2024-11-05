
// server.js
const express = require('express');
const connectDB = require('./db/conn');
const cors = require('cors');
//const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Connect to MongoDB
console.log(connectDB);
connectDB();
//mongoose.connect(process.env.MONGO_URI);
// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(require('./routes/auth'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is today running on port ${PORT}`));
