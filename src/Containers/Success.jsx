import React from 'react';
import AppContext from '../Context/AppContext';
import Map from '../Components/Map';
import '../Styles/Success.css';

const Success = () => {

    const { state } = React.useContext(AppContext);
    const { buyer } = state;

    return (
        <div className="Succes">
            <div className="Success-content">
                <h2>{buyer[0]?.name}, Gracias por tu compra</h2>
                <span>Tu pedido llegará en 3 días a tu dirección: {buyer[0].address}</span>
                <div className="Success-map">
                    <Map />
                </div>
            </div>
        </div>
    );
}

export default Success;