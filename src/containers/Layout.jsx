/**
 * Esta esctructura se le conoce como factor principal = 'Layout.jsx' este es 
 * un componente que va a recibir un hijo el cual va a ser la parte principal de 
 * nuestro proyecto...
 * 
 */

import React from "react";
import Header from "../components/Hearder";
const Layout = ({children}) => {
    return(
        <div className="Layout">
            <Header />
            {children}
        </div>
    );
}

export default Layout;