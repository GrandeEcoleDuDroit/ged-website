import { NavLink } from 'react-router-dom';
import RoutePaths from "../entities/RoutePaths.ts";
import "./Header.css"
import logo from "../assets/logo/logo.png"

const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink to={RoutePaths.HOME}><img alt="Logo GED" className="nav-logo-img" src={logo}/></NavLink>
                    <button aria-label="Menu" className="nav-toggle">
                        <span className="material-symbols-outlined">dehaze</span>
                    </button>
                    <ul className="nav-links">
                        <li><NavLink to={RoutePaths.LEGAL_NOTICE}>Mentions légales</NavLink></li>
                        <li><NavLink to={RoutePaths.ABOUT}>À propos de nous</NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
)
}

export default Navbar;