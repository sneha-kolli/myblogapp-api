const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const authRoutes = require('./routes/authRoutes');
const protectedRoutes = require('./routes/protectedRoutes');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://sify_user1:z3LjWnYSU-WL%23%25%40@cluster0.zrlrmlr.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Server is running');
});
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/auth', authRoutes);
app.use('/protected', protectedRoutes);

module.exports = app;
