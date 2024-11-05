// routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Bidder = require('../models/Bidder');
require('dotenv').config();

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
    const { firstname,lastname, email, password } = req.body;
    console.log('registering the route')
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const username = firstname+" "+lastname;
        const user = new Bidder({ username, email, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Login
router.post('/login', async (req, res) => {
    console.log("inside login")
    const { email, password } = req.body;
    try {
        console.log("entered email "+email);
        const user = await Bidder.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token,name:user.username });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
