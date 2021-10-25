import React from 'react';
import { Link } from 'react-router-dom';
import './SingleCourse.css';


const SingleCourse = (props) => {

    const id = props.course.hasOwnProperty('id') ? props.course.id : null;
    const image = props.course.hasOwnProperty('image') ? props.course.image : null;
    const title = props.course.hasOwnProperty('title') ? props.course.title : null;
    const price = props.course.hasOwnProperty('price') ? props.course.price : null;


    const url = `/service/${id}`


    return (

        <div className="col">
            <div className="card h-100">
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body text-secondary">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">${price}</p>
                </div>
                <div className="card-footer">
                    <Link to={url}>
                        <button className="btn btn-outline-dark">Enroll Course</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default SingleCourse;