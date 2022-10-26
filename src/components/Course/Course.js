import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    return (
        <div className="card card-side bg-sky-300 shadow-xl">
        <figure><img src="https://placeimg.com/200/280/arch" alt="Movie"/></figure>
        <div className="card-body">
            <h2 className="card-title">{course.title}</h2>
            <p>Course Duration: {course.duration}</p>
            <p>Course Fee: {course.fee}</p>
            <div className="card-actions justify-end">
            <Link to={`/course/${course.id}`}><button className="btn btn-primary">Learn More</button></Link>
            </div>
        </div>
        </div>
    );
};

export default Course;