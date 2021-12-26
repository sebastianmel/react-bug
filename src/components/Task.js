import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DelBtn from './DelBtn';


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


    }, []);
    
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
                {data && data.data.result.bug.map((key) => {

                    return <div className='botTask'>

                        <span><p>{key.title}</p></span>
                        <span>{key.description}</span>

                        <span>{key.user_id}</span>
                        <span> {new Date(key.timestamp * 1000).toLocaleString()}</span>
                        <div className='btnDiv'>
                            <select >
                                <option value="0">non traité</option>
                                <option value="1">en cours</option>
                                <option value="2">traité</option>
                            </select>
                    
    {/* My component for delete task , who take props of the previous function ------------------- */}
                            <DelBtn id={key.id}/>
                        </div>

                    </div>

                })}


            </div>

        );
    };

export default Task;