const express = require('express');
const jwt = require('jsonwebtoken');
const Router = express.Router();

// Middleware function to verify JWT token
const authenticateToken = (req, res, next) => {
  // Get the token from the request header
  const token = req.header('auth-token');
  
  if (!token) {
    // Token not found, return unauthorized status
    return res.status(401).json({ message: 'Access denied' });
  }

  try {
    // Verify the token
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    // Invalid token, return forbidden status
    res.status(403).json({ message: 'Invalid token' });
  }
};

// Protected booking route
Router.get('/', authenticateToken, (req, res) => {
  res.json({ get: { title: 'booking', description: 'login to access' } });
});

module.exports = Router;
