import React from 'react';
import { useEffect , useState } from 'react';
import axios from 'axios';

const Task = () => {
    const [data, setData] = useState('');
    const token = localStorage.getItem('token');
    
    
    useEffect(() => {
        axios
            .get('http://greenvelvet.alwaysdata.net/bugTracker/api/list/'+token+'/0')
            .then((res) => setData(res));
            console.log(token);
            
            
        }, []);
        console.log(data);

    return (
        
             <div className="bug-list">

                {/* {Object.keys(data.result.bug).map((key) => {
                    return <div className="bugs"><p>{data[key].title}</p>  <br/></div>
                })} */}


            </div>
        
    );
};

export default Task;