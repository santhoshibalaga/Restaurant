import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RestaurantPage from './pages/RestaurantPage';
import MenuPage from './pages/MenuPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LoginPage/>} />
                <Route path="/register" element={<RegisterPage/>} />
                <Route path="/restaurants" element={<RestaurantPage/>} />
                <Route path="/menu/:restaurantId" element={<MenuPage/>} />
            </Routes>
        </Router>
    );
};

export default App;
