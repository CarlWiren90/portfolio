import React from "react";
import './navbar.css';

const Navbar = () => {
    return (
      <>
        <nav className="navbar">
            <div className="navbar__wrapper">
                <span className="navbar__link navbar__status"><span className="weight">Status:</span> Looking for internship</span>
                <a className="navbar__link" href="https://www.github.com/CarlWiren90" rel="noopener noreferrer" target="_blank" aria-label="Go to Github profile">
                    <img className="navbar__logo" src="/GitHub.avif" alt="GitHub logo"/>
                </a>
                <a className="navbar__link" href="https://www.linkedin.com/in/carl-wirén-36990b330" rel="noopener noreferrer" target="_blank" aria-label="Go to Linked in profile">
                    <img className="navbar__logo" src="/LinkedIn.avif" alt="Linked in logo"/>
                </a>
            </div>
        </nav>
      </>  
    )
}

export default Navbar;