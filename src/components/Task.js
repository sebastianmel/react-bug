import React from 'react';
import { useEffect , useState } from 'react';
import axios from 'axios';

const task = () => {
    const [data, setData] = useState('');
   

    useEffect(() => {
        axios
            .get('http://greenvelvet.alwaysdata.net/kwick/api/list/')
            .then((res) => setData(res.data));

            console.log(data);
            
    }, []);

    return (
        
             <div className="bug-list">

                {/* {Object.keys(data).map((key) => {
                    return <div className="bugs"><p>{data[key].title}</p>  <br/></div>
                })} */}


            </div>
        
    );
};

export default task;