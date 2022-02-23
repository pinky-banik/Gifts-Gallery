import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Appbar = () => {
    return (
        <div>
             <FontAwesomeIcon icon={faCoffee} />
        </div>
    );
};

export default Appbar;