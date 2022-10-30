import React from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Checkout = () => {
    const course = useLoaderData();
    const {user} = useContext(AuthContext);
    //console.log(course);
    return (
        <div className="hero sm:m-12 lg:min-h-screen bg-base-200">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Checkout</h1>
            <p className="mb-5"></p>
            <div className="card w-96 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 shadow-xl text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-black">{course.title}</h2>
                    <p className='text-gray-900'>Cousre Fee: ${course.fees} || Duration: {course.duration}hr</p>
                    <div className="card-actions justify-end">
                    <label htmlFor="my-modal" className="btn modal-button">Confirm</label>
                    <Link to={`/course/${course.id}`}><button className="btn btn-outline">Cancel</button></Link>
                    </div>
                </div>
                </div>
            </div>


            {/* Modal Body */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Congratulations {user.displayName ? user.displayName : 'Your Enrollment is Complete' }!</h3>
                <p className='text-sm text-bold mt-4 '>You have Enrolled</p>
                <p className="py-4 font-semibold">{course.title}</p>
                <div className="modal-action">
                <label htmlFor="my-modal" className="btn">Yay!</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Checkout;