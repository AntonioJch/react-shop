import { useState } from "react";

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload] //payload se esta agregando como elemento adicional a el arreglo cart
        });
    };
    
    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id !== payload.id ),
        })
    }
    return {
        state,
        addToCart,
        removeFromCart
    }
}
 

export default useInitialState;  