import React from 'react';


// Function of the component  for add task ------------------------------------------------
const AddBtn = () => {


//    Recuparation of value stocked in the local Storage for the different requests--------
    const token = localStorage.getItem('token');
    const user_id1 = localStorage.getItem('user_id');

    // Function for start AddTask on click -----------------------------------------------
    const AddTask =()=>{

        // creatiion of an Object for the post method not with axios this time------------
        var body ={
            "title" : document.querySelector('.addInputText').value,
            "description": document.querySelector('.addInputTextaera').value,
        }
        // With axios my requests have been blocked---------------------------------------
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