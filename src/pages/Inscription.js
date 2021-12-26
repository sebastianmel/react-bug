import React from 'react';
import {NavLink } from 'react-router-dom';
import ValidateInscription from '../components/ValidateInscription';

// Function for display  a form for register ------------------------------------------
const Inscription = () => {
    return (
        <div className='inscription'>
            <h1>BUG TRACKER</h1>
            <div className='champ'>

                <h2>Nom de l'utilisateur</h2>
                <input type="text"  className='user'></input>

           
        
                <h2>Mot de passe</h2>
                <input type="password"  className='pass1' name="password" minLength="8" required></input>

                <h2>Retaper le mot le passe</h2>
                <input type="password"  className='pass2' name="password2" minLength="8" required></input>

         {/* Component for validtion of the registration ---------------------------------------*/}
            <ValidateInscription /><br></br>
            <NavLink  exact to={`/`} className="linkBot"><u>Se connecter</u></NavLink>

            </div>
            

        </div>
    );
};

export default Inscription;