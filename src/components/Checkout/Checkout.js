import React from 'react';
import { useContext } from 'react';
import { CourseData } from '../CourseDetails/CourseDetails';

const Checkout = () => {
    const {course} = useContext(CourseData);
    return (
        <div>
            <h2>{course?.displayName}</h2>
        </div>
    );
};

export default Checkout;