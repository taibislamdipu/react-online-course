import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Loading from '../Loading/Loading';
import SingleService from '../SingleService/SingleService';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        try {
            async function callApi() {
                let data = await fetch('./services.JSON');
                data = await data.json();
                data = data.slice(0, 4)
                setServices(data);
            }
            callApi();
        } catch (error) {
            console.log(error);
        }
    }, [])

    return (
        <div className="container my-5">
            <h3 className="mb-4 border-start border-5 border-warning">
                <span className="ms-4">The best online course and career track program in the whole world!</span>
            </h3>

            {
                services.length === 0 ?

                    <Loading></Loading>

                    :

                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {
                            services.map(service => <SingleService service={service}></SingleService>)
                        }
                    </div>
            }

            <div className="text-center my-5">
                <Link to="services">
                    <button className="btn btn-primary">See All Courses</button>
                </Link>
            </div>


            {/* upcoming-course section */}
            <div className="upcoming-course row g-4">
                <div className="col-md-7">
                    <h3 >
                        50% discount:
                        <br />
                        Full Stack Web Development (MERN) track
                    </h3>
                    <h5 className="lh-lg">Batch registration ends: 10 October 2021</h5>
                    <p className="text-secondary">
                        Updates are coming on Bahubrihi's Full Stack Web Development (MERN) career track. You can be admitted in the new batch from 1st to 10th October with 5,000.
                    </p>
                    <p className="text-secondary">
                        You will not get admission in any batch till 4-6 months after the registration is closed.
                    </p>

                    <div>
                        <NavLink to="/services">
                            <button className="btn btn-primary">
                                Learn More
                            </button>
                        </NavLink>
                    </div>
                </div>

                <div className="col-md-5">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/ung61E24_Y8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>


            </div>

        </div>
    );
};

export default Services;