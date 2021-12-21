import React from 'react';

const Inscription = () => {
    return (
        <div className='inscription'>
            <div>
            <label for="">Nom de l'utilisateur</label>
            <input type="text" width="30%"></input>

        </div>
        <div>
            <label for="">Mot de passe</label>
            <input type="text" width="30%"></input>

        </div>

        <button>OK</button>

        </div>
    );
};

export default Inscription;