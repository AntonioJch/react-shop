import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from "../containers/Layout";
import Home from '../pages/Home';
import Login from "../pages/Login";
import PasswordRecovery from "../pages/PasswordRecovery";
import SendEmail from "../pages/SendEmail";
import NewPasword from '../pages/NewPasword';
import MyAccount from "../pages/MyAccount";
import CreateAccount from"../pages/CreateAccount";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";
import NotFound from "../pages/NotFound";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";
import '../styles/global.css';



const App = () => {
    const initialState = useInitialState(); // aqui asignamos el estado para que es encapsulado por el Provider
   return (
       <AppContext.Provider value={initialState}>
       <BrowserRouter>
       <Layout>
       <Routes>
           
               <Route  path="/"  element={<Home />}/>
               <Route  path="/Login"  element={<Login />}/>
               <Route path= "password-recovery" element={< PasswordRecovery/>}/>
               <Route path= "send-email" element={< SendEmail/>}/>
               <Route path= "new-password" element={< NewPasword/>}/>    
               <Route  path="/account"  element={<MyAccount />}/>
               <Route  path="/signup"  element={<CreateAccount />}/>
               <Route path= "checkout" element={< Checkout/>}/>
               <Route  path="/orders"  element={<Orders />}/>
               <Route path="*" element={<NotFound />} />
           
       </Routes>
       </Layout>
       </BrowserRouter>
       </AppContext.Provider>
    );
}  

export default App;
