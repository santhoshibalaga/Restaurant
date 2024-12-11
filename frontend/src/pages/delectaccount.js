import React from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Deleteaccount(){
    const navigate=useNavigate();
    const handle_button=aysnc()=>{
        try{
            const token=localStorage.getItem('token');
            const res=await axios.delete('/api/auth/delete',{
                headers:{
                    'x-auth-token':token
                }
            });
            if(res.status===200){
                localStorage.removeItem('token');
                navigate('/register');
            }
        }catch(err){
            console.error(err);
            alert('failed to delete account');
        }
    };
    return(
        <button onClick={handle_button}>Delete Account</button>
    );
};

export default Deleteaccount;