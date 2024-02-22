const express = require('express');
const cors = require('cors');
const {APP_PORT} = require("./config");
const db = require("./config/mongoose");

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for all origins
app.use(cors());

// Example route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server

app.listen(APP_PORT, () => {
  console.log(`Server is running on port ${APP_PORT}`);
});
