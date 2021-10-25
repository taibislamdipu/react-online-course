import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">

                    <NavLink to="/">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="" />
                        </a>
                    </NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <NavLink to="/home">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                            </NavLink>

                            <NavLink to="/services">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">Services</a>
                                </li>
                            </NavLink>

                            <NavLink to="/business">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">Corporate E-Learning</a>
                                </li>
                            </NavLink>

                            <NavLink to="/about">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">About</a>
                                </li>
                            </NavLink>



                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;