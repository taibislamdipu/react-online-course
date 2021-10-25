import React from 'react';
import './Home.css';
import onlineLearningImg from '../../images/online-learning.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBuilding, faTasks, faHandsHelping, faUserClock } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container py-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6 lh-lg">
                    <h1>Learn on your own,
                        <br />
                        Build confidence.
                    </h1>
                    <p className="text-secondary">
                        Acquire the most important skills of the present time by enrolling in online courses, training and career track programs of your choice.
                    </p>
                    <NavLink to="/services">
                        <button className="btn btn-primary">
                            <FontAwesomeIcon icon={faShoppingCart} /> View Courses
                        </button>
                    </NavLink>

                    <div className="mt-5 text-secondary">
                        <ul className="home-list">
                            <li><FontAwesomeIcon icon={faBuilding} /> Content created by industry experts</li>
                            <li><FontAwesomeIcon icon={faTasks} /> Practical use based projects and assignments</li>
                            <li><FontAwesomeIcon icon={faHandsHelping} /> Direct support from mentors</li>
                            <li><FontAwesomeIcon icon={faUserClock} /> The advantage of learning at any time from anywhere</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <img className="img-fluid w-100" src={onlineLearningImg} alt="" />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Home;