import React from 'react';
import {NavLink } from 'react-router-dom';
import Login from '../components/Login';



const Connection = () => {
    return (
        <div className='connection'>
            <h1>BUG TRACKER</h1>
            <div className='champ'>
                <h2>Nom de l'utilisateur</h2>
                <input type="text" className='user'></input>

                <h2>Mot de passe </h2>
                <input type="password"className='pass' ></input> <br/>

                <Login/> <br/>
            <NavLink exact to={`/register`}><u>s'inscrire</u></NavLink>
            </div>
    
            
        </div>
    );
};

export default Connection;