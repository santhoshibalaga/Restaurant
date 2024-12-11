import React from "react";

import {useNavigate} from 'react-router-dom';

function Logout(){
    const navigate=useNavigate();
    const handlebutton=()=>{
        localStorage.removeItem('token');
        navigate('/login');
    }
    return (
        <button onClick={handlebutton}>Logout</button>
    )
}

export default Logout;