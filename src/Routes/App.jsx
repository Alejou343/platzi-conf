import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Containers/Home.jsx';
import Checkout from '../Containers/Checkout.jsx';
import Information from '../Containers/Information.jsx';
import Payment from '../Containers/Payment.jsx';
import Success from '../Containers/Success.jsx';
import NotFound from '../Containers/NotFound.jsx';
import Layout from '../Components/Layout.jsx';
import AppContext from '../Context/AppContext.js';
import useInitialState from '../Hooks/useInitialState.js';
import '../Styles/App.css';

const App = () => {

    const initialState = useInitialState();

    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path= "/" element={<Home />} />
                        <Route path= "/checkout" element={<Checkout />} /> 
                        <Route path= "/checkout/information" element={<Information />} />
                        <Route path= "/checkout/payment" element={<Payment />} />
                        <Route path= "/checkout/success" element={<Success />} />
                        <Route path= '*' element={<NotFound />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;