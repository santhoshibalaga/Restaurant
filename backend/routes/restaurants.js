const express = require('express');
const Restaurant = require('../models/Restaurant');
const User = require('../models/User');
const router = express.Router();

// Add a new restaurant
router.post('/add', async (req, res) => {
    const { name, owner, address ,image,rating} = req.body;

    try {
        const restaurant = new Restaurant({ name, owner, address,image, rating });
        await restaurant.save();
        res.json(restaurant);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Get all restaurants
router.get('/', async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
