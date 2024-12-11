const Restaurant = require('../models/Restaurant');

module.exports = async function (req, res, next) {
    try {
        const restaurant = await Restaurant.findById(req.body.restaurant);
        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }
        if (restaurant.owner.toString() !== req.user.id) {
            return res.status(403).json({ message: 'User not authorized' });
        }
        next();
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
