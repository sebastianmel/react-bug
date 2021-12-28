import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DelBtn from './DelBtn';
import NameUser from './NameUser';
import { keyboard } from '@testing-library/user-event/dist/keyboard';


// Funtion for display  all tasks --------------------------------------------------

// recuperation of informations------------------------------------------------

const Task = () => {
    const [data, setData] = useState('');
    const token = localStorage.getItem('token');
    
    

    useEffect(() => {
        axios
            .get('http://greenvelvet.alwaysdata.net/bugTracker/api/list/' + token + '/0')
            .then((res) => setData(res));
        console.log(token);
        console.log(data);

    }, []);




        // Function for change state
        // const [newId, setNewId] = useState('');
         
        // const handleChange =(bugId) => {
            
        //     const newIdSelected= document.querySelector('.selected').value;
        //     axios
        //     .get('http://greenvelvet.alwaysdata.net/bugTracker/api/state/' + token + '/'+bugId+'/'+newIdSelected)
        //     .then((res) => setNewId(res));               
        // }
   
// Array of tasks on the home page---------------------------------------------------

        return (

            <div className='container' >
                <div className='topTask'>
                    <span>Titre</span>
                    <span>description</span>
                    <span>développeur</span>
                    <span>date</span>
                    <span>état/suprimer</span>


                </div>
                {data && data.data.result.bug.map((bug) => {

                    return <div className='botTask'>

                        <span><p>{bug.title}</p></span>
                        <span>{bug.description}</span>

                        {/* <NameUser name={bug.user_id}/>       PROBLEME d'affichage AVEC AXIOS  noms des utilisateur affiché dans la console !!!------------------             */} 
                        <span>{bug.user_id}</span>
                        <span> {new Date(bug.timestamp * 1000).toLocaleString()}</span>
                        <div className='btnDiv'>
                             <select className='selected'  value={bug.state}> {/* onChange={handleChange(bug.id)} don t work */}
                                <option value="0">non traité</option>
                                <option value="1">en cours</option>
                                <option value="2">traité</option>
                            </select>
                    
    {/* My component for delete task , who take props of the previous function ------------------- */}
                            <DelBtn id={bug.id}/>
                        </div>

                    </div>

                })}


            </div>

        );
    };

export default Task;