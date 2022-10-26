import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseTitle = ({course}) => {
    const { title, id} = course;
    const navigate = useNavigate();
    const handleCourseDetail = () =>{
        navigate(`/course/${id}`)
    }
    return (
        
        <div>
            <div onClick={handleCourseDetail} className="card w-96 bg-base-300 text-black cursor-pointer">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>We are using cookies for no reason.</p>
                <div className="card-actions justify-end">
            </div>
            </div>
            </div>
        </div>
    );
};

export default CourseTitle;