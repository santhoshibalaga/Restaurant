const express = require('express');
const MenuItem = require('../models/MenuItem');
const router = express.Router();

// Add menu item
router.post('/add', async (req, res) => {
    const { restaurant, name, price,description, image,process,ingredients } = req.body;

    try {
        const menuItem = new MenuItem({ restaurant, name, price,description,image,process,ingredients});
        await menuItem.save();
        res.json(menuItem);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Get menu items for a restaurant
router.get('/:restaurantId', async (req, res) => {
    try {
        const menuItems = await MenuItem.find({ restaurant: req.params.restaurantId });
        res.json(menuItems);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
