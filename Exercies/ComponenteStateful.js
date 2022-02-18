/**
 * Stateful: un componente que va a tener un estado...
 * veamos la estructra: 
 * 
 */

import React, {useState} from 'react';

const Button = () => {
const [name, setName] = useState('Hello World');
return(
    <div>
        <h1>{name}</h1>
    </div>
);
}

/**
 * 
 */