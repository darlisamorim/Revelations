// React Import
import React from 'react'

// Style Import
import './header.css'

// React Icons
import { CgMenu } from 'react-icons/cg';

// Construct
function Header() {

    return (
        <header className="header container__flex">
            <div className="content__flex">
                <a title="" href="src/templates/Header/header"><CgMenu size="2.6em" /></a>

                <h1 className="logotipo">
                    <strong>Darlis</strong> Alves Amorim<b>_</b>
                    <span className="dn">| </span>
                </h1>

                <nav className="menu">
                    <h3 className="fz">
                        Navegação |
                    </h3>

                    <ul>
                        <li><a title="Home | " href="/Users/darlis/Desktop/www/magazine/public">Home</a></li>
                        <li><a title="404 | " href="/notfound">404</a></li>
                        <li><a title="Contato | " href="/contato">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header

