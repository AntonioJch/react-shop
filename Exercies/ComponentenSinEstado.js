/**
 * stateless: con este componente ya no manejamos el estado asi: 
 * 
 */


import React from "react";

const ejemplo = () => (
    <div>
        <h1>hi</h1>
    </div>
); 


/***               o asi:                          */

const Button = ({ text }) => <ButtondRed text={text}/>


/***               o asi:                          */

const ejemplo2 = () => <ButtondRed />
