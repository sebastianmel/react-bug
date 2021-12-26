import React from 'react';
import {NavLink } from 'react-router-dom';
import AddBtn from '../components/AddBtn';


// Function for display  navigation and a little form for add task------------------------------------------
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
            
        <h2 className='addLabel'>Titre:</h2>
            <input placeholder="titre" className='addInputText' type="text" ></input>
        

        <h2 className='addLabel'>Description :</h2>
          <textarea className='addInputTextaera'placeholder="description" />
        
        </div>
    </div>
    );
};

export default Add;