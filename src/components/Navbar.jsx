import React from 'react'
import menu_icon from '../imgs/menu_icon.png'

const Navbar = () => {

    const menuOpen = () => {
        document.getElementById("menu").style.display = "flex";
    }

    const menuClose = () => {
        document.getElementById("menu").style.display = "none";
    }

    return (
        <div className="navbar">
            <div className="navTitle">
                <h1>James Luty</h1>
            </div>
            <div className="lgNavbar">
                <ul className="navWrapper sm">
                    <li className='navLink'>
                        <a href="#about">About</a>
                    </li>
                    <li className='navLink'>
                        <a href="#projects">Projects</a>
                    </li>
                    <li className='navLink'>
                        <a href="#skills">Skills</a>
                    </li>
                    <li className='navLink'>
                        <a href="#experience">Experience</a>
                    </li>
                    <li className='navLink'>
                        <a href="#education">Education</a>
                    </li>
                    <li className='navLink'>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div onMouseOver={menuOpen} onMouseOut={menuClose} className="mdNavbar">
                <img src={menu_icon} alt="menu" className="menuIcon"/>
                <ul className="navWrapper sm" id="menu">
                    <li className='navLink'>
                        <a href="#about">About</a>
                    </li>
                    <li className='navLink'>
                        <a href="#projects">Projects</a>
                    </li>
                    <li className='navLink'>
                        <a href="#skills">Skills</a>
                    </li>
                    <li className='navLink'>
                        <a href="#experience">Experience</a>
                    </li>
                    <li className='navLink'>
                        <a href="#education">Education</a>
                    </li>
                    <li className='navLink'>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar