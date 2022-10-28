import React from 'react';
import { useContext } from 'react';
import { CourseData } from '../CourseDetails/CourseDetails';
import { Link } from 'react-router-dom';

const Enroll = () => {
    const {course} = useContext(CourseData);
    console.log(course);
    const {id, title, discripOne} = course;
    return (
        <div>
            <div className=" min-h-screen bg-base-200 p-6">
                <div className=" flex-col lg:flex-row-reverse">
                    <div className="carousel w-full mb-5">
                    <div id="slide1" className="carousel-item relative w-full">
                    <img src={course.imgWide} className="w-full" alt='slider' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    </div>
                    </div>
                </div> 
                </div>
                        <div className='mx-4 w-8/12'>
                            <h1 className="text-4xl font-bold my-5">{title}</h1>
                            <div className='grid grid-cols-2 px-5'>
                            <div>
                                <p className='font-lg my-6'>{course.summary}</p>
                                <p className="py-6">{discripOne}</p>
                            <br />
                            <p>{course.discripTwo}</p></div>
                            <div className=''>
                                <h4 className='text-xl font-semibold'>Course Contents:</h4>
                            {
                                course.content.map((con, index) => <li key={index}>{con}</li>)
                            }
                            </div>
                            </div>
                            <Link to={`/checkout/${id}`}><button className="btn btn-primary my-5">Premium Access</button></Link>
                        </div>
                </div>
             </div>
    );
};

export default Enroll;