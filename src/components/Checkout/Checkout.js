import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    //console.log(course);
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">CheckOut</h1>
      <p className="mb-5">Provident cupid In deleniti eaque aut repudian.</p>
      <div className="card w-96 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 shadow-xl text-neutral-content">
        <div className="card-body items-center text-center">
            <h2 className="card-title">{course.title}</h2>
            <p>Cousre Fee: ${course.fees} || Duration: {course.duration}hr</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Confirm</button>
            <button className="btn btn-ghost">Cancel</button>
            </div>
        </div>
        </div>
      </div>
            
        </div>
    );
};

export default Checkout;