// Import React
import React from 'react'

// React Routers Dom
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

// Import Pages
import Home from './page/Home/home' // Home Page
import Notfound from "./page/Notfound/notfound"; // 404
import Contact from "./page/Contact/contact";

// Imports Elements of Pages
import { Single } from "./components/Single/single"; // Contact

// Construct
function Routers() {
    return (
        // Routers Args
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/single" element={<Single />} />
                <Route path="/contato" element={<Contact />} />
                <Route path="/OoooPss" element={<Notfound />} />

                <Route path="*" element={<Navigate to="/OoooPss" />} />
            </Routes>
        </Router>
    )
}

export default Routers
