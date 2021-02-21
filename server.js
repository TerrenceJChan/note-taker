
const express = require('express');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3002;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Front-end folder path.
app.use(express.static('./public'));

// Routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Server porting.
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
}); 