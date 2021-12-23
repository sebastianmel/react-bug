import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Logout = () => {

    const [login, setLogin] = useState('');
    
   

    const Logout =()=> {
        let token = localStorage.getItem('uesrN') ;
        
        
        axios
         .get('http://greenvelvet.alwaysdata.net/bugTracker/api/logout/'+token )
         .then((res) => setLogin(res));
         console.log(login);
         
         if(login.data.result.status==='done'){
             
             window.location.href="/home"
            } 
            alert(login.data.result.message);
       
    };

    return (
        
            <button onClick={Logout} className='navBtn'>Logout</button>
        
    );
};

export default Logout;