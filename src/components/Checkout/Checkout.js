import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    //console.log(course);
    return (
        <div>
            <h2>Default Title</h2>
            {
                course.id && <h2>{course.title}</h2>
            }
        </div>
    );
};

export default Checkout;