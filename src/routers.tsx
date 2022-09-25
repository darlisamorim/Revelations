// Import React
import React from 'react'

// React Router Dom
import {BrowserRouter as Routers, Routes, Route, Navigate} from "react-router-dom";

// Import Pages
import Home from './page/Home/home' // Home Page
import Notfound from "./page/Notfound/notfound"; // 404
import Contact from "./page/Contact/contact"; // Contact

// Construct
function Router() {
    return (
        // Router Args
        <Routers>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contato" element={<Contact />} />
                <Route path="/notfound" element={<Notfound />} />

                <Route path="*" element={<Navigate to="/notfound" />} />
            </Routes>
        </Routers>
    )
}

export default Router
