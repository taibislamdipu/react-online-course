import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import SingleCourse from '../SingleCourse/SingleCourse';
import './Courses.css';

const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        try {
            async function callApi() {
                let data = await fetch('./services.JSON');
                data = await data.json();
                setCourses(data);
            }
            callApi();
        } catch (error) {
            console.log('amr error found', error);
        }

    }, [])

    return (
        <div className="container py-5">
            <div className="text-center">
                <h2>All Online Courses</h2>
                <p className="text-secondary">
                    Place an order by choosing the online course or career track program of your choice;
                    <br />
                    You can then view the ordered courses on your dashboard.
                </p>


            </div>
            {
                courses.length === 0 ?

                    <Loading></Loading>

                    :
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {
                            courses.map(course => <SingleCourse course={course}> </SingleCourse>)
                        }
                    </div>
            }
        </div>
    );
};

export default Courses;