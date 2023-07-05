import React from 'react';
import Product from './Product.jsx';
import AppContext from '../Context/AppContext.js';
import '../Styles/Products.css';

const Products = () => {

  const { state, addToCart } = React.useContext(AppContext); 
  const { products } = state;

  const handleAddToCart = (product) => {
    addToCart(product)
  }

  return (
    <div className="Products">
        <div className="Products-items">
            {products.map(x => 
                <Product key={x.id} product={x} handleAddToCart={handleAddToCart} />
            )}
        </div>
    </div>
  )
}

export default Products