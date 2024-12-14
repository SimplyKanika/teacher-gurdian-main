// index.js

const express = require('express');
const app = express();
const port = 5000;

// Middleware to parse JSON request body
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Server is working....');
});

// Placeholder for your profile route (adjust path if necessary)
const profileRoutes = require('../Backend/src/routes/profileRoutes');
app.use('/api/profile', profileRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
