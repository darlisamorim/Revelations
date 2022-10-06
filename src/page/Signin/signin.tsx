// React Import
import React from 'react'

// Style Import
import './signin.css'

// Construct
function Signin() {

    return (
        <main className="container">
            <h1>Login</h1>
            <br/>
            <a href="/sign-up">Inscreva-se</a>
            <br/>
            <br/>
            <a href="/forget">Perdeu a senha ?</a>
        </main>
    )

}

export default Signin
