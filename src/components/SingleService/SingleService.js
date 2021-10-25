import React from 'react';
import { Link } from 'react-router-dom';
import './SingleService.css';

const SingleService = (props) => {

    const id = props.service.hasOwnProperty('id') ? props.service.id : null;
    const image = props.service.hasOwnProperty('image') ? props.service.image : null;
    const title = props.service.hasOwnProperty('title') ? props.service.title : null;
    const price = props.service.hasOwnProperty('price') ? props.service.price : null;

    const url = `/service/${id}`

    return (

        <div className="col">
            <div className="card h-100">
                <img src={image} alt={title} className="card-img-top h-50" />
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

export default SingleService;