import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../Context/AppContext';
import '../Styles/Header.css';

const Header = () => {

    const { state } = React.useContext(AppContext);
    const { cart } = state;

    return (
        <div className="Header">
            <Link to="/">
                <h1 className="Header-title">PlatziConf Merch</h1>  
            </Link>
            <div className="Header-checkout">
                <Link to="/checkout">
                    <i className="fas fa-shopping-basket"></i>
                </Link>
                    {cart.length > 0 && 
                    <div className="Header-alert"> 
                        {cart.length}
                    </div>}
            </div>
        </div>
    );
}

export default Header;