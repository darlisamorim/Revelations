// React Import
import React from 'react'

// Style Import
import './header.css'

// Construct
function Header() {

    return (
        <header className="container">

            <h1 className="logotipo">
                <strong>Darlis</strong> Alves Amorim<b>_</b>
                <span className="dn">| </span>
            </h1>

            <nav className="menu">
                <h3 className="fz">
                    Navegação |
                </h3>

                <ul>
                    <li><a title="Home | " href="/">Home</a></li>
                    <li><a title="404 | " href="/notfound">404</a></li>
                    <li><a title="Contato | " href="/contato">Contato</a></li>
                </ul>
            </nav>

        </header>
    )
}

export default Header

