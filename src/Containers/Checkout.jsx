import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '../Styles/Checkout.css';
import AppContext from '../Context/AppContext';

const Checkout = () => {

    const { state, removeFromCart } = React.useContext(AppContext);
    const { cart } = state;

    const handleRemoveFromCart = (product) => {
        removeFromCart(product)
    }

    return (
    <>
        <Helmet>
            <title>Lista de productos - PCM </title>
        </Helmet>
        <div className="Checkout">
            <div className="Checkout-content">
                {cart.length > 0 ? <h3>Lista de pedidos:</h3> : <h3>Sin pedidos...</h3>}
                {cart.map((x,i) => <div className="Checkout-item" key={i}>
                    <div className="Checkout-element">
                        <h4>{x.title}</h4>
                        <span>{x.price}</span>
                    </div>
                    <button type="button" onClick={() => handleRemoveFromCart(x)}>
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </div> )}
            </div>
            {cart.length > 0 && <div className="Checkout-sidebar">
                <h3>Precio Total: $ {cart.reduce((a,b) => a + b.price, 0)}</h3>
                <Link to="/checkout/information">
                    <button type="button">Continuar Pedido</button>
                </Link>
            </div>}
        </div>
    </>
    );
}

export default Checkout;