import React from 'react';
import './CorporateCourse.css';

const CorporateCourse = (props) => {

    const image = props.corporateCourse.hasOwnProperty('image') ? props.corporateCourse.image : null;
    const title = props.corporateCourse.hasOwnProperty('title') ? props.corporateCourse.title : null;

    return (

        <div className="col">
            <div className="card h-100 ">
                <img src={image} className="card-img-top h-50" alt="" />
                <div className="card-body text-secondary ">
                    <h5 className="card-title">{title}</h5>
                </div>
            </div>
        </div>

    );
};

export default CorporateCourse;