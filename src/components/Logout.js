import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Logout = () => {

    const [logout, setLogout] = useState('');
    
   

    const Logout =()=> {
        const token = localStorage.getItem('token');
        
        
        axios
         .get('http://greenvelvet.alwaysdata.net/bugTracker/api/logout/'+token )
         .then((res) => setLogout(res));
         console.log(logout);
         
         if(logout.data.result.status==='done'){
             
             window.location.href="/home"
            } 
            alert(logout.data.result.message);
       
    };

    return (
        
            <button onClick={Logout} className='navBtn'>Logout</button>
        
    );
};

export default Logout;