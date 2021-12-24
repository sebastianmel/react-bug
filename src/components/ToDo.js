import React from 'react';
import { useEffect , useState } from 'react';
import axios from 'axios';

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
        <div >

        {data && data.data.result.bug.map((key) => {

            
            return <div> 
                <span>{key.title}</span>  
                <span>{key.description}</span> 
                <span>{key.id}</span>
                <span> {new Date(key.timestamp * 1000 ).toLocaleString()}</span>

                </div>  
            
        })

        }


    </div>
    );
};

export default ToDo;