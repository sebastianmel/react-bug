import React from 'react';
import { useState } from 'react';

import axios from 'axios';




const Login = () => {
    const [login, setLogin] = useState('');
    
    
    
        const ValidLogin =()=> {
            const userN = document.querySelector('.user').value;
            const password= document.querySelector('.pass').value;
            
            axios
            .get('http://greenvelvet.alwaysdata.net/bugTracker/api/login/'+ userN+'/'+password)
            .then((res) => setLogin(res))
            .then( ()=>{
                if(login!==undefined && login.data.result.status==='done' ){
                    let token = localStorage.setItem( 'token', login.data.result.token);
                    let user_id = localStorage.setItem( 'user_id', login.data.result.id);
    
                    console.log(user_id);
                    console.log(token);
                    console.log(userN);
                    
                 window.location.href="/home"
                } 
                alert(login.data.result.message);
            }

            );
            console.log(login);
             
            // if(login!=undefined && login.data.result.status==='done' ){
            //     let token = localStorage.setItem( 'token', login.data.result.token);
            //     let user_id = localStorage.setItem( 'user_id', login.data.result.id);

            //     console.log(user_id);
            //     console.log(token);
            //     console.log(userN);
                
            // //  window.location.href="/home"
            // } 
            // alert(login.data.result.message);
       
    };

     return (
         <div className='loginBtn'>
              <button  onClick={ValidLogin}>ENTRER</button>
         </div>
     );
};

export default Login;