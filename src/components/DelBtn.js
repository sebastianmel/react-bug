import React from 'react';
import {  useState } from 'react';
import axios from 'axios';


// Function for delete task with task.js props ------------------------------

const DelBtn = (props) => { //recuperation of task.js  props-----------------

    const id = props.id;  
    const [del, setDel] = useState('');
    
   
// Function for start delete on click ---------------------------------------
    const DelFunct =()=> {
        const token = localStorage.getItem('token');
        
        
        axios
         .get('http://greenvelvet.alwaysdata.net/bugTracker/api/delete/'+token+'/'+ id)
         .then((res) => setDel(res));
        alert('suprimer');
        window.location.reload(false);
        
             
          
            
        
    };
    return (
        <button onClick={DelFunct} >supprimer</button>
    );
};

export default DelBtn;