// React Imports
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import Routers
import Header from "./components/Header/header";
import Routers from './routers';
import Footer from "./components/Footer/footer";

// Global Style
import './style.css'

// Construct
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Header />
        <Routers />
        <Footer />
    </React.StrictMode>
)






