// React Imports
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import Routers
import Routers from './routers';

// Global Style
import './style.css'

// Construct
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Routers />
    </React.StrictMode>
)






