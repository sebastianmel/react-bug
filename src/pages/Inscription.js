import React from 'react';
import ValidateInscription from '../components/ValidateInscription';

const Inscription = () => {
    return (
        <div className='inscription'>
            <div>
            <label htmlFor="">Nom de l'utilisateur</label>
            <input type="text" width="30%" className='user'></input>

        </div>
        <div>
            <label htmlFor="">Mot de passe</label>
            <input type="text" width="30%" className='pass'></input>

        </div>

        <ValidateInscription/>

        </div>
    );
};

export default Inscription;