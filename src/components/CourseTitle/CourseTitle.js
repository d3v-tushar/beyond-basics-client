import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseTitle = ({course}) => {
    const { title, id, duration, fees} = course;
    const navigate = useNavigate();
    const handleCourseDetail = () =>{
        navigate(`/course/${id}`)
    }
    return (
        
        <div>
            <div onClick={handleCourseDetail} className="card w-auto bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-black cursor-pointer">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p><span className='font-semibold'>Duration: {duration}hr</span> | <span className='font-semibold'>Course Fee: ${fees}</span></p>
                <div className="card-actions justify-end">
            </div>
            </div>
            </div>
        </div>
    );
};

export default CourseTitle;