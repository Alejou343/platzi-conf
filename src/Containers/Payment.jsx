import React from 'react';
import AppContext from '../Context/AppContext';
import '../Styles/Payment.css';
import PayPalButton from '../Components/PayPal';
import { Helmet } from 'react-helmet';

const Payment = () => {

    const { state } = React.useContext(AppContext);
    const { cart } = state;

    return (
    <>
        <Helmet>
            <title>Payment - PCM</title>
        </Helmet>
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido:</h3>
                {cart.map((item, index) => 
                    <div className="Payment-item" key={index}>
                        <div className="Payment-element">
                            <h4>{item.title}</h4>
                            <span>
                                $
                                {' '}
                                {item.price}
                            </span>
                        </div>
                    </div>
                    )}
                <div className="Payment-button">
                    <PayPalButton />
                </div>
            </div>
        </div>
    </>
    );
}

export default Payment;