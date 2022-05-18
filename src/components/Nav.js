import React from "react"
import { Link } from "react-router-dom"
import { FaBars } from 'react-icons/fa'

export default function Nav() {
    const [burger, setBurger] = React.useState(false)
    function toggleMenu() {
        setBurger(prevState => !prevState)
    }
    const navStyle =
    {
        left: burger ? 0 : ""
    }


    return (

        <nav className="navigation">
            <div className="main-navigation flex">
                <div className="burger" >
                    <input type="checkbox" name="" id="check" />
                    <label htmlFor="check" onClick={toggleMenu}><FaBars className="burger" /></label>
                </div>
                < section >
                    <ul className="navigation-links" style={navStyle}>
                        <li className="link"><Link to="/home" onClick={toggleMenu}>home</Link></li>
                        <li className="link"><Link to="/projects" onClick={toggleMenu}>projects</Link></li>
                        <div className="logo-space"></div>
                        <li className="link"><Link to="/about" onClick={toggleMenu}>about</Link></li>
                        <li className="link"><Link to="/contact" onClick={toggleMenu}>contact</Link></li>
                    </ul></section>
                <div className="logo">ar-ey</div>
            </div>
        </nav >
    )
}