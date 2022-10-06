// Import React
import React from 'react'

// React Routers Dom
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

// Import Pages
import Home from './page/Home/home' // Home Page
import Single from "./page/Single/single"; // Single of Posts
import Contact from "./page/Contact/contact"; // Contact

import Notfound from "./page/Notfound/notfound"; // 404

import Signin from "./page/Signin/signin"; // Sign in
import Signup from "./page/Signup/signup"; // Sign up
import Forget from "./page/Forget/forget"; // Forget

// Imports Elements of Pages

// Construct
function Routers() {
    return (
        // Routers Args
        <Router>
            <Routes>
                {/* Main */}
                <Route path="/" element={<Home />} />
                <Route path="/single" element={<Single />} />
                <Route path="/contato" element={<Contact />} />

                {/* Signin */}
                <Route path="/sign-in" element={<Signin />} />
                <Route path="/sign-up" element={<Signup />} />
                <Route path="/forget" element={<Forget />} />

                {/* 404 */}
                <Route path="/OoooPss" element={<Notfound />} />
                <Route path="*" element={<Navigate to="/OoooPss" />} />
            </Routes>
        </Router>
    )
}

export default Routers
