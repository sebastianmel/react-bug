import React from 'react';
import { useState } from 'react';
import axios from 'axios';

// Function to register a new user   -------------------------------------------------
const ValidateInscription = () => {


    const [signup, setSignup] = useState();


    


    const Valid = () => {

// Recuperation of all login inputs for tcheck is exemple password is the same in password confirmation------
        const userN = document.querySelector('.user').value;
        const password = document.querySelector('.pass1').value;
        const passwordVerif = document.querySelector('.pass2').value;

        // And creation of some condition to restrict-------------------------------------------------- 
        if (password === passwordVerif) {
            axios
                .get('http://greenvelvet.alwaysdata.net/bugTracker/api/signup/' + userN + '/' + password)
                .then((res) => setSignup(res));
                alert(signup.data.result.message);
                console.log(signup);

        }else {
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