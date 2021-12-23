import React from 'react';
import { useState } from 'react';
import axios from 'axios';


const ValidateInscription = () => {


    const [signup, setSignup] = useState();


    


    const Valid = () => {
        
        const userN = document.querySelector('.user').value;
        const password = document.querySelector('.pass1').value;
        const passwordVerif = document.querySelector('.pass2').value;

        if (password === passwordVerif) {
            axios
                .get('http://greenvelvet.alwaysdata.net/bugTracker/api/signup/' + userN + '/' + password)
                .then((res) => setSignup(res));
                alert(signup.data.result.message);
                console.log(signup);

        }else{
            alert('Ce ne sont pas les mêmes mots de passe!');
        }


    };



    return (
        <div className='inscriptionBtn'>
            <button onClick={Valid}>S'INSCRIRE</button>
        </div>
    );
};

export default ValidateInscription;