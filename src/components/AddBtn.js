import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const AddBtn = () => {
   
    const token = localStorage.getItem('token');
    const user_id1 = localStorage.getItem('user_id');
    const descrip = document.querySelector('.addInputTextaera').value;
    const title = document.querySelector('.addInputText').value;
    
    
    
    
    const AddTask =()=>{

        var body ={
            "title" : title,
            "description": descrip,
        }
        var requestOptions={
            method:'POST',
            body: JSON.stringify(body),
        };

        fetch('http://greenvelvet.alwaysdata.net/bugTracker/api/add/'+token+'/'+user_id1 , requestOptions)
        .then(res => res.json())
        .then(function(data) {
            console.log(data.result);
        })
        .catch(error=> console.log('error', error));
        window.location.href="/home";
        alert('taks ajoutée');

        
    }

    return (
        
            <button onClick={AddTask} className='navBtn'>Sauvegarder</button>
        
    );
};

export default AddBtn;