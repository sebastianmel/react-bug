import React from 'react';
import {NavLink } from 'react-router-dom';
import Logout from '../components/Logout';
import ToDo from '../components/ToDo';


const HomeToDo = () => {
    return (
        <div className='homeToDo'>
           
        <nav>
            <h1>Bug tracker</h1>
            <div className='navRightPart'>

            <NavLink  exact to={`/home`} className="linkBot"><a>Liste complète</a></NavLink>
            <a>A traiter</a>
            <NavLink  exact to={`/add`} className="linkBot"> <button className='navBtn'>Ajouter</button></NavLink>
            <Logout/>
            </div>

        </nav>
        <div className='liste'>
            <ToDo/>
        </div>
    </div>
    );
};

export default HomeToDo;