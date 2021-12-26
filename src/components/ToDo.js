import React from 'react';
import { useEffect , useState } from 'react';
import axios from 'axios';
import DelBtn from './DelBtn';

// Function for show  user  task list  on click-------------------------------------------------
const ToDo = () => {
    const [data, setData] = useState('');

    //Recuparation of value stocked in the local Storage for the different requests---
    const token = localStorage.getItem('token');
    const user_id = localStorage.getItem('user_id');
    
    
    useEffect(() => {
        axios
            .get('http://greenvelvet.alwaysdata.net/bugTracker/api/list/'+token+'/'+user_id)
            .then((res) => setData(res));
            console.log(token);
            
            
        }, []);
        
  // Array of tasks on the home page---------------------------------------------------      
    return (
        <div className='container'>
             <div className='topTask'>
                     <span>Titre</span>
                     <span>description</span>
                     <span>développeur</span>
                     <span>date</span>
                     <span>état/suprimer</span>
                 </div>

        {data && data.data.result.bug.map((key) => {

            
            return <div className='botTask'> 
                <span>{key.title}</span>  
                <span>{key.description}</span> 
                <span>{key.user_id}</span>
                <span> {new Date(key.timestamp * 1000 ).toLocaleString()}</span>
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
            
        })

        }


    </div>
    );
};

export default ToDo;