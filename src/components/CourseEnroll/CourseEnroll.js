import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './CourseEnroll.css';
import Modal from '../Modal/Modal';

const CourseEnroll = () => {

    const { courseID } = useParams();

    const [course, setCourse] = useState([]);

    useEffect(() => {
        try {
            async function callApi() {
                let results = await fetch('../services.JSON');
                results = await results.json();
                results = await results.find(course => course.id === courseID);
                setCourse(results);
            }
            callApi();
        } catch (error) {
            console.log(error);
        }
    }, [])

    const title = course.hasOwnProperty('title') ? course.title : null;
    const image = course.hasOwnProperty('image') ? course.image : null;

    const cardStyle = {

        maxWidth: '540px',
        borderRadius: '7px',
        boxShadow: '10px 10px 24px -13px rgba(0, 0, 0, 0.75)'

    }

    return (
        <div>

            <Modal title={title} image={image} msg={'Good Luck!🙂'}></Modal>

            <div className="container py-5">
                <h2 className="text-warning fw-bold text-md-start text-center mb-4">Congratulation!<span className="wave">👋</span></h2>


                <div className="row g-3 py-4" style={cardStyle} >
                    <div className="col-md-6">
                        <img className="img-fluid w-100" src={image} alt="" />
                    </div>

                    <div className="col-md-6">
                        <p className="fw-bold">{title}</p>

                        {/* <!-- Button trigger modal --> */}
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Continue Course
                        </button>
                    </div>
                </div>







            </div>
        </div >
    );
};

export default CourseEnroll;