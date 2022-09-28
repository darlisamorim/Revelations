// React Import
import React from 'react'

// Import Components
import { Posts } from "../../components/Posts/posts"; // Post
import { Read } from "../../components/MostRead/read"; // MostRead
import { Movie } from "../../components/FeaturedMovie/movie"; // MostRead

// Style Import
import './home.css'

// Construct
function Home() {

    return (
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
    )
}

export default Home
