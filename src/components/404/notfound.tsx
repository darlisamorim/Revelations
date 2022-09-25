import React, { useState } from 'react'
import reactLogo from '../../assets/images/react.svg'
import './notfound.css'
import { FaAngular } from "react-icons/fa";

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
        <span></span>
        <h1>Vite + React</h1>
        <h2>Vite + React</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      <div className="card">
          <FaAngular />
      </div>

    </div>
  )
}

export default Home
