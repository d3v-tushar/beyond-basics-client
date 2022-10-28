import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    return (
        <div className="card bg-base-100 shadow-xl image-full">
        <figure><img src={course.img} alt="Shoes" /></figure>
        <div className="card-body">
        <h2 className="card-title text-2xl">{course.title}</h2>
        <p className='my-4'>{course.summary}</p>
            <div className="card-actions grid grid-cols-2 justify-end">
                <div>
                    <p><span className='text-yellow-400'><i class="fa-solid fa-star"></i></span> {course.rating.rate} <small>({course.rating.count})</small> | ${course.fees} | {course.duration} <small>hr</small></p>
                </div>
            <div className='grid justify-end'><Link to={`/course/${course.id}`}><button className="btn btn-primary">Learn More</button></Link></div>
            </div>
        </div>
        </div>
    );
};

export default Course;