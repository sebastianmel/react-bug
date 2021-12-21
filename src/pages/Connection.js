import React from 'react';
import {NavLink } from 'react-router-dom';



const Connection = () => {
    return (
        <div className='connection'>
            <div>
                <label htmlFor="">Nom de l'utilisateur</label>
                <input type="text" width="30%"></input>

            </div>
            <div>
                <label htmlFor="">Mot de passe </label>
                <input type="text" width="30%"></input>

            </div>
            <button>Connection</button>
            <NavLink exact to={`/register`}><button type="button" class="btn btn-outline-success"  >Inscription</button></NavLink>
            
        </div>
    );
};

export default Connection;