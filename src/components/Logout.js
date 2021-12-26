import React from 'react';
import { useState } from 'react';
import axios from 'axios';

// Function for logout an existing user  -----------------------------------------------
const Logout = () => {

    const [logout, setLogout] = useState('');
    
   
// Loard the function on the click-----------------------------------------------------
    const Logout =()=> {
    
 //    Recuparation of value stocked in the local Storage for the different requests---
        const token = localStorage.getItem('token');
        
        
        axios
         .get('http://greenvelvet.alwaysdata.net/bugTracker/api/logout/'+token )
         .then((res) => setLogout(res));

         // Redirect to the home if  is user disconected-------------------------------
             window.location.href="/"
          
            
            alert('utilisateur deconnecté');
       
    };

    return (
        
            <button onClick={Logout} className='navBtn'>Logout</button>
        
    );
};

export default Logout;