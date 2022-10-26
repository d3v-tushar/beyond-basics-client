import React from 'react';

const CourseTitle = ({course}) => {
    return (
        <div>
            <div className="card w-96 bg-base-300 text-black">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{course.course}</h2>
                <p>We are using cookies for no reason.</p>
                <div className="card-actions justify-end">
                </div>
            </div>
            </div>
        </div>
    );
};

export default CourseTitle;