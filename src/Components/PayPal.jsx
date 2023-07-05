import React from "react";
import { useNavigate } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import AppContext from "../Context/AppContext";

const PayPalButton = () => {

    const navigate = useNavigate();
    const { state } = React.useContext(AppContext);
    const { cart } = state;

    return (
        <PayPalScriptProvider options={{ "client-id": String(process.env.CLIENT_ID) }}>
        <PayPalButtons
            createOrder={(data, actions) => {
            return actions.order.create({
                purchase_units: [
                {
                    amount: {
                    value: cart.reduce((a,b) => a + b.price, 0),
                    },
                },
                ],
            });
            }}
            onApprove={() => {navigate('/checkout/success')}}
            onError={(error) => { console.error("Error en el pago", error)}}
        />
        </PayPalScriptProvider>
    );
}

export default PayPalButton;