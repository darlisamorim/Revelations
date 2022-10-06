// React Import
import React from 'react'

// Import Routers
import Header from "../../templates/Header/header";
import Footer from "../../templates/Footer/footer";

// Import Components
import { Posts } from "../../components/Posts/posts"; // Post
import { Read } from "../../components/MostRead/read"; // MostRead
import { Movie } from "../../components/FeaturedMovie/movie"; // MostRead

// Style Import
import './home.css'

// Construct
function Home() {

    return (
        <>
            <Header />
            <main className="main container">

                <Posts />

                <section className="container movie">
                    <div className="content__flex">
                        <h1 className="container">Nol</h1>
                        <Movie />
                        <Read />
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}

export default Home
