import React from 'react';
import { useEffect , useState } from 'react';
import axios from 'axios';

const DelBtn = (props) => {

    const id = props.id;
    const [del, setDel] = useState('');
    
   

    const DelFunct =()=> {
        const token = localStorage.getItem('token');
        
        
        axios
         .get('http://greenvelvet.alwaysdata.net/bugTracker/api/delete/'+token+'/'+ id)
         .then((res) => setDel(res));
        //  console.log(logout.data.result.status);
        alert('suprimer');
        window.location.reload(false);
        
             
          
            
        
    };
    return (
        <button onClick={DelFunct} >supprimer</button>
    );
};

export default DelBtn;