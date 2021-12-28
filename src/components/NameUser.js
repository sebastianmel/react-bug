import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';


// Function to display the name users in the bug list
const NameUser = (props) => {

    const [nameUser, setNameUser] = useState(['']);
    const name = props.name;
    const token = localStorage.getItem('token');
    
    
    useEffect(() => {
            axios
                .get('http://greenvelvet.alwaysdata.net/bugTracker/api/users/' + token )
                .then(function (response) {
                    console.log(JSON.parse(JSON.stringify(response.data.result.user[name])));
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
                // .then((res) => setData(res.user));
                // console.log(data);
                // .data.result.user[name]
    
    
        }, []);

    return (
        <span>
            {/* {name && <p>{data.result.user[name]}</p> } */}
            

        </span>
    );
};

export default NameUser;