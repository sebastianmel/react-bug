import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';


const ValidateInscription = () => {

    const [data, setData] = useState('');
   const userN = document.querySelector('.user');
   const password= document.querySelector('.pass');
  


    useEffect(() => {
        axios
            .get('http://greenvelvet.alwaysdata.net/bugTracker/api/signup/'+ userN+"/"+password)
            .then((res) => setData(res.data));

            
            
    }, []);
    console.log(data);
    return (
        <div>
            <button onClick={ValidateInscription}>inscription</button>
        </div>
    );
};

export default ValidateInscription;