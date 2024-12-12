const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

// Register route
// router.post('/register', async (req, res) => {
//   const { username, password } = req.body;
//
//     const existingUser = await User.findOne({ where: { username } });
//       if (existingUser) {
//           return res.status(400).json({ message: 'User already exists' });
//             }
//
//               const user = await User.create({ username, password });
//                 res.status(201).json({ message: 'User created', user });
//                 });
//
//                 // Login route
//                 router.post('/login', async (req, res) => {
//                   const { username, password } = req.body;
//
//                     const user = await User.findOne({ where: { username } });
//                       if (!user) {
//                           return res.status(400).json({ message: 'Invalid credentials' });
//                             }
//
//                               const isMatch = await bcrypt.compare(password, user.password);
//                                 if (!isMatch) {
//                                     return res.status(400).json({ message: 'Invalid credentials' });
//                                       }
//
//                                         const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//                                           res.json({ message: 'Login successful', token });
//                                           });
//
//                                           module.exports = router;
//
