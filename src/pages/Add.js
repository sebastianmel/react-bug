import React from 'react';
import {NavLink } from 'react-router-dom';

const Add = () => {
    return (
        <div className='home'>
        <nav>
            <h1>Bug tracker</h1>
            <div className='navRightPart'>

            <a>Liste complète</a>
            <a>A traiter</a>
            <NavLink  exact to={`/home`} className="linkBot"> <button className='navBtn'>Annuler</button></NavLink>
            <button className='navBtn'>Sauvegarder</button>
            
            </div>

        </nav>
        <h1>Nouveau bug</h1>
        <div className='form'>
            
        <label className='addLabel'>
          Titre:
            <input className='addInputText' type="text"  />
        </label>
        

        <label className='addLabel'>
            Description :
          <textarea  className='addInputTextaera' />
        </label>
        </div>
    </div>
    );
};

export default Add;