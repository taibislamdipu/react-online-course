import React from 'react';
import { NavLink } from 'react-router-dom';
import notFoundImg from '../../images/not-found-page.png';

const NotFound = () => {
    return (
        <div className="container-fluid text-center py-5">
            <div>
                <img width="300" src={notFoundImg} alt="" />
            </div>
            <h2>This page could not be found!</h2>
            <p className="text-secondary">
                We are sorry. But the page you are looking for is not available.
                <br />
                Perhaps you can try a new search.
            </p>

            <NavLink to="/home">
                <button className="btn btn-primary">BACK TO HOME</button>
            </NavLink>

        </div>
    );
};

export default NotFound;