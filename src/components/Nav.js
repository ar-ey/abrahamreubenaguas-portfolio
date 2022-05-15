import React from "react"
import { Link } from "react-router-dom"

export default function Nav() {
    return (

        <nav className="navigation">
            <ul className="navigation-links">
                <li className="link"><Link to="/home">home</Link></li>
                <li className="link"><Link to="/projects">projects</Link></li>
                <div className="logo-space"></div>
                <li className="link"><Link to="/about">about</Link></li>
                <li className="link"><Link to="/contact">contact</Link></li>
            </ul>
            <div className="logo">ar-ey</div>
        </nav>
    )
}