import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const AddBtn = () => {
   
    const token = localStorage.getItem('token');
    const user_id1 = localStorage.getItem('user_id');
    
    

    const [add, setAdd] = useState('');
    const AddTask =()=>{

        axios
         .post('http://greenvelvet.alwaysdata.net/bugTracker/api/add/'+token+'/'+user_id1 )
        
        
         console.log(add);
            
        // if(add.date.result.status==='done'){


        //      add.data.result.title === titre;
        //      add.data.result.description === descri;

        // }else{

        // }
         
         
            
            //  window.location.href="/home"
          
            
            // alert('taks ajoutée');
    }

    return (
        
            <button onClick={AddTask} className='navBtn'>Sauvegarder</button>
        
    );
};

export default AddBtn;