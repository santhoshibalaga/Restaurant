import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './restaurant.css'; // Import the CSS file

const RestaurantPage = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const res = await axios.get('/api/restaurants');
                setRestaurants(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchRestaurants();
    }, []);

    return (
        <div className="restaurant-grid">
            {restaurants.map(restaurant => (
                <div className="restaurant-card" key={restaurant._id}>
                    <Link to={`/menu/${restaurant._id}`}>
                        <img src={restaurant.image} alt={restaurant.name} style={{height:'40vh'}}/>
                        <h3>{restaurant.name}</h3>
                    </Link>
                    <p>{restaurant.address}</p>
                    <p style={{color:'green'}}>Rating: {restaurant.rating}</p>
                </div>
            ))}
        </div>
    );
};

export default RestaurantPage;
