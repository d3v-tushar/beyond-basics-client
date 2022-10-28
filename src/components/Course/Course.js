import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {
    return (
        // <div className="card card-side bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 shadow-xl">
        // <figure><img src="https://placeimg.com/200/280/arch" alt="Movie"/></figure>
        // <div className="card-body">
        //     <h2 className="card-title">{course.title}</h2>
        //     <p>Course Duration: {course.summary}</p>
        //     <p>Course Fee: {course.fee}</p>
        //     <div className="card-actions justify-end">
        //     <Link to={`/course/${course.id}`}><button className="btn btn-primary">Learn More</button></Link>
        //     </div>
        // </div>
        // </div>

        //Card 2

        // <div className="card w-96 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 shadow-xl">
        // <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        // <div className="card-body">
        //     <h2 className="card-title">{course.title}</h2>
        //     <p>{course.summary}</p>
        //     <div className="card-actions justify-end">
        //     <Link><button className="btn btn-primary">Learn More</button></Link>
        //     </div>
        // </div>
        // </div>

        // card 3

        <div className="card bg-base-100 shadow-xl image-full">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div className="card-body">
        <h2 className="card-title text-2xl">{course.title}</h2>
        <p className='my-4'>{course.summary}</p>
            <div className="card-actions justify-end">
                <p>Duration: {course.duration} hr</p>
                <p>Fees: ${course.fees}</p>
                <br />
                <div className="rating">
                <p><input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" /></p><p className='mx-1 mt-1'>{course.rating.rate}</p>
                </div>
            <Link to={`/course/${course.id}`}><button className="btn btn-primary">Learn More</button></Link>
            </div>
        </div>
        </div>
    );
};

export default Course;