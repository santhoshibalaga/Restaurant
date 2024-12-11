import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import "./../index.css";

const LoginPage = () => {
    const [email, setEmail] = useState(''); // to keep track of the state fo the email
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); // State to handle errors
    const navigate = useNavigate();

    useEffect(() => {
        // Clear the form fields when the component mounts
        console.log("component mounted successfully");
        localStorage.clear();
        sessionStorage.clear();
        setEmail('');
        setPassword('');
    },[]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/login', { email, password });
            console.log('Response:', res); // Log the response
            if (res && res.data) {
                localStorage.setItem('token', res.data.token);
                setEmail('');
                setPassword('');
                navigate('/restaurants');
                console.log("form feild are cleared");
            } else {
                setError('Unexpected response format');
            }
        } catch (err) {
            console.error('Error:', err); // Log the error
            setError('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className='form-login'>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
            <form onSubmit={handleSubmit} >
                <label>
                    Email
                </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
            <p>Dont have an account? <Link to="/register">Register Now</Link></p>
        </div>
    );
};

export default LoginPage;
