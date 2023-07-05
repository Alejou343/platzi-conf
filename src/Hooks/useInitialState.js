import React from 'react';
import initialState from '../initialState.js';

const useInitialState = () => {
    const [state, setState] = React.useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    }

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(x => x.id !== payload.id)
        })
    }

    const addToBuyer = (payload) => {
        setState({
            ...state,
            buyer: [...state.buyer, payload]
        })
    }

    return {
        state,
        removeFromCart,
        addToCart,
        addToBuyer
    }
};

export default useInitialState;