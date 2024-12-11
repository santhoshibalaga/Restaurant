import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./../index.css";

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isOwner, setIsOwner] = useState(false);
    const [error, setError] = useState(null); // State to handle errors
    const navigate = useNavigate();
    useEffect(() => {
        // Clear the form fields when the component mounts
        console.log("component mounted successfully");
        setName('');
        setEmail('');
        setIsOwner(false);
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/register', { name, email, password, isOwner });
            console.log('Response:', res); // Log the response
            if (res && res.data) {
                localStorage.setItem('token', res.data.token);
                setEmail('');
                setIsOwner('');
                setName('');
                navigate('/');
            } else {
                setError('Unexpected response format');
            }
        } catch (err) {
            console.error('Error:', err); // Log the error
            setError('Registration failed. Please try again.');
        }
    };

    return (
        <div className='form-login'>
            <h2>Register</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                <label>
                    <input type="checkbox" checked={isOwner} onChange={(e) => setIsOwner(e.target.checked)} />
                    Are you a restaurant owner?
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;
