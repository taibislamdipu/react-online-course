import React from 'react';
import './About.css';
import bohubrihiOverviewImg from '../../images/bohubrihi-at-a-glance.png';
import aboutUsImg from '../../images/about-us.png';

const About = () => {
    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center py-5 ">
                <div className="col-md-6">
                    <h3>
                        The leading eLearning platform for
                        <br />
                        certified online courses
                    </h3>
                    <p>
                        Bohubrihi is a place where anyone can enroll in courses, get access to exclusive contents and get skilled to be in demand.
                    </p>
                </div>
                <div className="col-md-6">
                    <div>
                        <img className="img-fluid w-100" src={aboutUsImg} alt="" />
                    </div>
                </div>
            </div>

            <div className="text-center pb-5">
                <h2>About Bohubrihi</h2>
                <p className="text-secondary">
                    Bohubrihi is where smart and enthusiastic Bangladeshi people, who are lifelong learners, come to get the skills they need and to transform their lives as they want. We are a community of enthusiastic learners united in a shared objective of life transformation through self-learning.
                </p>
            </div>

            {/* bohubrihi Overview Img */}
            <div>
                <img className="w-100 img-fluid" src={bohubrihiOverviewImg} alt="" />
            </div>

            {/* Our Vision & What's In The Future? */}
            <div className="d-flex justify-content-center align-items-center mt-5 about-half-width">
                <div className="col-md-6 p-4 m-2 about-card">
                    <h3 className="text-center">Our Vision</h3>
                    <p className="text-secondary">
                        Bohubrihi is where motivated learners will come to learn the skills they need, to pursue the jobs they wish, to build things they want and to lead the lives they deserve. Students will be offered with opportunity to do some close to real-world projects curated by experts. These will help them to have the experience and portfolio for future. The online courses will come from not only individuals but rather renowned and established organizations of many different sectors- to provide the best quality education and recognition to the people of Bangladesh. Our goal is to grow exponentially and to engage and educate 1 million people by 2022.
                    </p>
                </div>
                <div className="col-md-6 p-4 m-2 about-card">
                    <h3 className="text-center">What's In The Future?</h3>
                    <p className="text-secondary">
                        Our future learning models and personalized support system will enable an unimaginable degree of engagement with our students and instructors. And, we will be with them through every phase of their learning graph: from the time the social media team may reply a query on Facebook Page, to the fulfilling moment when the career-counselling team will get the email that a learner has found a job or started something new with the knowledge he gained here. Our priority is always the betterment of our students, and this flare will always inspire us to offer high-quality practical education to as many people as we can reach through internet.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default About;