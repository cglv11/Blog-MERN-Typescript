import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link className="navbar-brand" to="/">
                My-personal-blog
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/publications">
                            Publications
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/github">
                            Github
                        </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/counter">
                        Counter
                    </Link>
                    </li> 
                    <li className="nav-item">
                    <Link className="nav-link" to="/login">
                        Login
                    </Link>
                    </li> 
                    <li className="nav-item">
                    <Link className="nav-link" to="/usuarios">
                        Usuarios
                    </Link>
                    </li> 
                    <li className="nav-item">
                    <Link className="nav-link" to="/formularios">
                        Formularios
                    </Link>
                    </li> 
                </ul>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    <Link className="nav-link" to="/new-publication">
                        Create a new publication
                    </Link>
                    </li> 
                </ul>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
