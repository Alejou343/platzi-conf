import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Information.css';
import AppContext from '../Context/AppContext';

const Information = () => {

    const { state, addToBuyer } = React.useContext(AppContext);
    const form = React.useRef(null);
    const navigate = useNavigate();
    const { cart } = state;

    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const buyer = {
            name: formData.get('name'),
            email: formData.get('email'),
            address: formData.get('address'),
            apto: formData.get('apto'),
            city: formData.get('city'),
            country: formData.get('country'),
            state: formData.get('state'),
            cp: formData.get('cp'),
            phone: formData.get('phone')
        }
        addToBuyer(buyer);
        navigate('/checkout/payment');
    }

    return (
        <div className="Information">
            <div className="Information-content">
                <div className="Information-head">
                    <h2>Información de contacto</h2>
                </div>
                <div className="Information-form">
                    <form ref={form}>
                        <input type="text" placeholder="Nombre completo" name="name" />
                        <input type="text" placeholder="Correo electónico" name="email" />
                        <input type="text" placeholder="Dirección" name="address" />
                        <input type="text" placeholder="Apto" name="apto" />
                        <input type="text" placeholder="Ciudad" name="city" />
                        <input type="text" placeholder="Pais" name="country" />
                        <input type="text" placeholder="Estado" name="state" />
                        <input type="text" placeholder="Codigo postal" name="cp" />
                        <input type="text" placeholder="Teléfono" name="phone" />
                    </form>
                </div>
                <div className="Information-buttons">
                    <div className="Information-back">
                        <Link to="/checkout">
                            Regresar
                        </Link>
                    </div>
                    <div className="Information-next">
                        <button type="/checkout/payment" onClick={handleSubmit}>
                            Pagar
                        </button>
                    </div>
                </div>
            </div>
            <div className="Information-sidebar">
                <h3>Pedido:</h3>
            {cart.map((item, index) => 
                <div key={index} className="Information-item">
                    <div className="Information-element">
                        <h4>{item.title}</h4>
                        <span>${item.price}</span>
                    </div>
                </div>)}
            </div>
        </div>
    );
}

export default Information;