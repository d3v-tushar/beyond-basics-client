import React from 'react';
import { useContext } from 'react';
import { CourseData } from '../CourseDetails/CourseDetails';
import { Link } from 'react-router-dom';

const Enroll = () => {
    const {course} = useContext(CourseData);
    console.log(course);
    const {id, title, discription} = course;
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" alt='course-img' />
                        <div>
                            <h1 className="text-5xl font-bold">{title}</h1>
                            <p className="py-6">{discription}</p>
                            <Link to={`/checkout/${id}`}><button className="btn btn-primary">Premium Access</button></Link>
                        </div>
                </div>
             </div>
        </div>
    );
};

export default Enroll;