import React from 'react';
import { useState } from 'react';
import { Redirect} from 'react-router-dom';
import axios from 'axios';




const Login = () => {
    const [login, setLogin] = useState('');
    
    
    
    //  useEffect(() => {
        
        //  }, []);
        const ValidLogin =()=> {
            const userN = document.querySelector('.user').value;
            const password= document.querySelector('.pass').value;
            // let token = localStorage.setItem( userN, login.data.result.token);
        
        axios
         .get('http://greenvelvet.alwaysdata.net/bugTracker/api/login/'+ userN+'/'+password)
         .then((res) => setLogin(res));
         console.log(login);
         
         if(login.data.result.status==='done'){
             
             window.location.href="/home"
            } 
            alert(login.data.result.message);
       
    };

     return (
         <div className='loginBtn'>
              <button  onClick={ValidLogin}>ENTRER</button>
         </div>
     );
};

export default Login;