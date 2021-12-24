import React from 'react';
import {NavLink } from 'react-router-dom';
import Logout from '../components/Logout';
import Task from '../components/Task';

const Home = () => {
    return (
        <div className='home'>
            <nav>
                <h1>Bug tracker</h1>
                <div className='navRightPart'>

                <a>Liste complète</a>
                <NavLink  exact to={`/home/todo`} className="linkBot"><a>A traiter</a></NavLink>
                <NavLink  exact to={`/add`} className="linkBot"> <button className='navBtn'>Ajouter</button></NavLink>
                <Logout/>
                </div>

            </nav>
            <div className='liste'>
                <Task/>
            </div>
        </div>
    );
};

export default Home;