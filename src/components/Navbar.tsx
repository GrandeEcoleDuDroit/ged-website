import { NavLink } from 'react-router-dom';
import RoutePaths from "../entities/RoutePaths.ts";
import "./styles/Navbar.css"
import logo from "../assets/logo/ged-logo.png"
import {useState} from "react";
import useTheme from "../hooks/useTheme.ts";

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    const closeMenu = () => {
        setIsActive(false);
    }

    const  { theme, toggleTheme } = useTheme();

    return (
        <header>
            <nav className="navbar">
                <div className="nav-container">
                    <div className="nav-left">
                        <NavLink to={RoutePaths.HOME} className="nav-logo" onClick={closeMenu}>
                            <img alt="Logo GED" src={logo}/>
                        </NavLink>

                        <ul className={`nav-links ${isActive ? "active" : ""}`}>
                            <li><NavLink to={RoutePaths.LEGAL_NOTICE} onClick={closeMenu}>Mentions légales</NavLink></li>
                            <li><NavLink to={RoutePaths.ABOUT} onClick={closeMenu}>À propos de nous</NavLink></li>
                        </ul>
                    </div>

                    <div className={`nav-right ${isActive ? "absolute" : ""}`}>
                        <button onClick={toggleTheme} className="nav-toggle-theme">
                            <span className="material-symbols-outlined">{theme == "dark" ? "light_mode" : "dark_mode"}</span>
                        </button>

                        <button aria-label="Menu" className="nav-toggle" onClick={toggleMenu}>
                            <span className="material-symbols-outlined">dehaze</span>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;