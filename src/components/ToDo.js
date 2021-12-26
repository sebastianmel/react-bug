import React from 'react';
import { useEffect , useState } from 'react';
import axios from 'axios';
import DelBtn from './DelBtn';

const ToDo = () => {
    const [data, setData] = useState('');
    const token = localStorage.getItem('token');
    const user_id = localStorage.getItem('user_id');
    
    
    useEffect(() => {
        axios
            .get('http://greenvelvet.alwaysdata.net/bugTracker/api/list/'+token+'/'+user_id)
            .then((res) => setData(res));
            console.log(token);
            
            
        }, []);
        console.log(data);
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
                            <button onClick={DelBtn} >supprimer</button>
                        </div>

                </div>  
            
        })

        }


    </div>
    );
};

export default ToDo;