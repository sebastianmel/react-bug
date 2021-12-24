import React from 'react';
import {NavLink } from 'react-router-dom';
import AddBtn from '../components/AddBtn';

const Add = () => {
    return (
        <div className='home'>
        <nav>
            <h1>Bug tracker</h1>
            <div className='navRightPart'>

            <NavLink  exact to={`/home`} ><a>Liste complète</a></NavLink>
            <NavLink  exact to={`/home/todo`} ><a>A traiter</a></NavLink>
            <NavLink  exact to={`/home`} className="linkBot"> <button className='navBtn'>Annuler</button></NavLink>
            <AddBtn/>
            
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