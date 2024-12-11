const express = require('express');
const connectDB = require('./config/db');
const app = express();
const authRoutes = require('./routes/auth');
const restaurantRoutes = require('./routes/restaurants');
const menuRoutes = require('./routes/menu');
const cors = require('cors');
app.use(cors());

require('dotenv').config();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/menu', menuRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
