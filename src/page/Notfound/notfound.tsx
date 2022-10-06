// React Import
import React from 'react'

// Import Routers
import Header from "../../templates/Header/header";
import Footer from "../../templates/Footer/footer";

// Style Import
import './notfound.css'

// Construct
function Notfound() {

    return (
        <>
            <Header />
            <main className="container">
                <div className="container 404">
                    <h1>Page 404</h1>
                    <a title="" href="/">Voltar a Home</a>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Notfound
