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
                <a>A traiter</a>
                <button className='navBtn'>Ajouter</button>
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