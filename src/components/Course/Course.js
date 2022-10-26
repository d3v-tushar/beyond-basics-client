import React from 'react';

const Course = ({course}) => {
    return (
        <div className="card card-side bg-sky-300 shadow-xl">
        <figure><img src="https://placeimg.com/200/280/arch" alt="Movie"/></figure>
        <div className="card-body">
            <h2 className="card-title">{course.course}</h2>
            <ol id='star'></ol>
            <p>Course Duration: {course.duration}</p>
            <p>Course Fee: {course.fee}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn More</button>
            </div>
        </div>
        </div>
    );
};

export default Course;