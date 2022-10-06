// React Import
import React from 'react'

// Style Import
import './header.css'

// React Icons
import { CgMenu } from 'react-icons/cg';
import { MdOutlineDarkMode } from 'react-icons/md';
import { BsSunFill } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import {Simulate} from "react-dom/test-utils";

// Construct
function Header() {
    function show() {
        const btnOpenMenu = document.getElementById('menu');
        btnOpenMenu.classList.add('opened');
        console.log('funcionou!')
    }
    function close() {
        const btnCloseMenu = document.getElementById('menu');
        btnCloseMenu.classList.remove('opened');
        console.log('funcionou!')
    }
    return (
        <>
            <header className="header container__flex">
                <div className="content__flex">
    
                    <button onClick={show}>
                        <CgMenu size="2em" />
                    </button>

                    <h1 className="logotipo">
                        <a title="" href="/">
                            <strong>Darlis</strong> Alves Amorim<b>_</b>
                            <span className="dn">| </span>
                        </a>
                    </h1>

                    <ul>
                        <li><MdOutlineDarkMode size="2em"  /></li>
                        <li><BsSunFill size="2em"  /></li>
                        <li><a title="Login | " href="/sign-in">Entrar</a></li>
                    </ul>

                </div>
            </header>

            <nav id="menu">
                <h3 className="">
                    <span>Navegação</span>
                    <i onClick={close}>
                        <IoMdClose color="#fff" size="2em" />
                    </i>
                </h3>

                <ul className="">
                    <li><a title="Home | " href="/">Home</a></li>
                    <li><a title="Single Posts | " href="/single">Single</a></li>
                    <li><a title="404 | " href="/notfound">404</a></li>
                    <li><a title="Contato | " href="/contato">Contato</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Header