import React from 'react';
import { useState } from 'react';

import axios from 'axios';



// Function for login an existing user  -------------------------------------------------
const Login = () => {
    const [login, setLogin] = useState('');
    
    // Loard the function on the click---------------------------------------------------
        const ValidLogin =()=> {

            // Recuperation of value stocked in the different inputs---------------------
            const userN = document.querySelector('.user').value;
            const password= document.querySelector('.pass').value;

            // requeste AJAX with axios -------------------------------------------------
            axios
            .get('http://greenvelvet.alwaysdata.net/bugTracker/api/login/'+ userN+'/'+password)
            .then((res) => setLogin(res))
            .then( ()=>{     
                // And creation of some condition to restrict the connection
                if(login!==undefined && login.data.result.status==='done' ){
                    let token = localStorage.setItem( 'token', login.data.result.token);
                    let user_id = localStorage.setItem( 'user_id', login.data.result.id);
                    
                // Just  for tcheck value-------------------------------------------------
                    // console.log(user_id);
                    // console.log(token);
                    // console.log(userN);
            
                    // Redirect to the home if all conditions are great-------------------
                 window.location.href="/home"
                } 
                alert(login.data.result.message);
            }

            );
            console.log(login);
             
           
       
    };

     return (
         <div className='loginBtn'>
              <button  onClick={ValidLogin}>ENTRER</button>
         </div>
     );
};

export default Login;