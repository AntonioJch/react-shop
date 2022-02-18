
/**
 * aqui identificamos un elemento que va a ser clave en este caso donde va a vivir la informacion:
 * definimos el valor de 'AppContext' es cual va a ser el uso de la API 'Context' que existe dentro
 * de React.
 * 
 * en recumidas palabras 'AppContext' va a definir un contexto entre los archivos donde es importado y 
 * declarado permitiendo el flujo de los estados representados en funciones que entregaran la 
 * informacion de estos estados...  
 */

import React from 'react';

const AppContext = React.createContext({});

export default AppContext;