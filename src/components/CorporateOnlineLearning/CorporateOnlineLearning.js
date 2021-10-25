import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import corporateImg from '../../images/corporate-img.png';
import corporateTrainingImg from '../../images/corporate-training.png';

import CorporateCourse from '../CorporateCourse/CorporateCourse';
import Loading from '../Loading/Loading';
import Modal from '../Modal/Modal';

const CorporateOnlineLearning = () => {


    const [corporateCourses, setCorporateCourses] = useState([]);

    useEffect(() => {
        try {
            async function callApi() {
                let data = await fetch('./corporateCourse.JSON');
                data = await data.json();
                setCorporateCourses(data);
            }
            callApi();
        } catch (error) {
            console.log(error);
        }
    }, [])


    return (
        <div className="py-5">
            <div className="container ">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 lh-lg">
                        <h2>
                            Empower your employees
                            <br />
                            through e-Learning!
                        </h2>
                        <p className="text-secondary">
                            Our innovative approach and robust online training courses help achieve your company’s learning goals and increase efficiency across organization!
                        </p>

                        <NavLink to="/services">
                            <button className="btn btn-primary">
                                Learn More
                            </button>
                        </NavLink>

                    </div>
                    <div className="col-md-6">
                        <div>
                            <img className="img-fluid w-100" src={corporateImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <h3 className="text-center py-5">
                Need online training for 10+ employees?
                <br />
                Try Bohubrihi for Business
            </h3>

            {
                corporateCourses.length === 0 ?

                    <Loading></Loading>

                    :

                    <div class="container ">
                        <div className="row row-cols-1 row-cols-md-4 g-4">
                            {
                                corporateCourses.map(corporateCourse => <CorporateCourse corporateCourse={corporateCourse}></CorporateCourse>)
                            }
                        </div>
                    </div>
            }

            <div className="py-5 text-center">
                <button className="btn btn-success">Get upto 30% discount on team enrollment</button>
            </div>


            {/* corporate Training section */}
            <div className="container py-3">
                <div className="row justify-content-center align-items-center g-4 py-3">
                    <div className="col-md-6 lh-lg">
                        <h3>
                            No More Expensive, Generic &
                            <br />
                            Traditional Corporate Training!
                        </h3>
                        <hr />
                        <h5>
                            Why choose eLearning for your team?
                        </h5>
                        <ul className="text-secondary">
                            <li>Significant economies of scale; higher ROI</li>
                            <li>Reduced cost, time and improved efficiency</li>
                            <li>More flexible, adaptable & scalable</li>
                            <li>Sustainable and actionable learning</li>
                            <li>Greater employee productivity</li>
                            <li>Transforming workforce according to future demand</li>
                        </ul>


                        <Modal
                            phoneNumber={'Phone: +8801916-633509 (10AM-5PM)'}
                            greetingsMsg={"Hello, Call at this number"}
                        ></Modal>

                        {/* <!-- Button trigger modal --> */}
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Let's Talk
                        </button>

                    </div>
                    <div className="col-md-6">
                        <div>
                            <img className="img-fluid w-100" src={corporateTrainingImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default CorporateOnlineLearning;