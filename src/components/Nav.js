import React from "react"
import { Link } from "react-router-dom"
import { FaBars } from 'react-icons/fa'

export default function Nav() {

    function toggleMenu() {
        setBurger(prevState => !prevState)
    }
    const navStyle =
    {
        left: burger ? 0 : ""
    }
    React.useEffect(() => {

    }, [burger])

    return (

        <nav className="navigation">
            <div className="main-navigation flex">
                <div className="burger" onClick={toggleMenu}>
                    <input type="checkbox" name="" id="check" />
                    <label htmlFor="check"><FaBars className="burger" /></label>
                </div>
                < section >
                    <ul className="navigation-links" style={navStyle}>
                        <li className="link"><Link to="/home">home</Link></li>
                        <li className="link"><Link to="/projects">projects</Link></li>
                        <div className="logo-space"></div>
                        <li className="link"><Link to="/about">about</Link></li>
                        <li className="link"><Link to="/contact">contact</Link></li>
                    </ul></section>
                <div className="logo">ar-ey</div>
            </div>
        </nav >
    )
}