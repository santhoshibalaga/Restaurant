import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './menu.css';

const MenuPage = () => {
    const { restaurantId } = useParams();
    const [menuItems, setMenuItems] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchMenuItems = async () => {
            const res = await axios.get(`/api/menu/${restaurantId}`);
            setMenuItems(res.data);
        };
        fetchMenuItems();
    }, [restaurantId]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    return (
        <div className='menu-container'>
            <h2>Menu</h2>
            <div className="menu-grid">
                {menuItems.map((item) => (
                    <div className='menu-item' key={item._id}>
                        <img src={item.image} alt={item.name}/><br/>
                        {item.name} - ${item.price}
                        <p>Rating: {item.rating}</p>
                        <ul>
                        {item.ingredients.map(ingredient => (
                            <li key={ingredient._id}>
                                {ingredient.name}: {ingredient.quantity}
                            </li>

                        ))}
                    </ul>
                        <p>process: {item.process}</p>
                        <button className="add-to-cart-btn" onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                ))}
            </div>
            <div className="cart-container">
            <h3>Cart</h3>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price}
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
};

export default MenuPage;
