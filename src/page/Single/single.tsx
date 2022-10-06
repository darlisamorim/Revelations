// React Import
import React from 'react'

// Import Routers
import Header from "../../templates/Header/header";
import Footer from "../../templates/Footer/footer";

// Style Import
import './single.css'

// Construct
export function Single() {

    return (
        <>
            <Header />
            <main className="container">
                <section className="posts container">
                    <div className="content grid">
                        <h1 className="">Test Post Single</h1>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Single