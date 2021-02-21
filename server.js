
const express = require('express');
const fs = require('fs');
const path = require("path");

// const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3002;
const app = express();

// Middleware for push and put requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Front-facing front-end folder path.
// app.use(express.static('./public'));
app.use('/static', express.static(path.join(__dirname, 'public')))

// Routes
// app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Server porting.
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
}); 