import React from 'react';
import { useEffect , useState } from 'react';
import axios from 'axios';

const DelBtn = () => {

    const [del, setDel] = useState('');
    
   

    const DelBtn =()=> {
        const token = localStorage.getItem('token');
        
        
        axios
         .get('http://greenvelvet.alwaysdata.net/bugTracker/api/delete/'+token+'/')
         .then((res) => setDel(res));
        //  console.log(logout.data.result.status);
         
         
            
             
          
            
        
        alert('suprimer');
    };
    return (
        <button onClick={DelBtn} >supprimer</button>
    );
};

export default DelBtn;