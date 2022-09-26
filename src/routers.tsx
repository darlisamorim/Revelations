// Import React
import React from 'react'

// React Routers Dom
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

// Import Pages
import Home from './page/Home/home' // Home Page
import Notfound from "./page/Notfound/notfound"; // 404
import Contact from "./page/Contact/contact"; // Contact

// Construct
function Routers() {
    return (
        // Routers Args
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contato" element={<Contact />} />
                <Route path="/notfound" element={<Notfound />} />

                <Route path="*" element={<Navigate to="/notfound" />} />
            </Routes>
        </Router>
    )
}

export default Routers
