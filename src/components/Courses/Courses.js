import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import CourseTitle from '../CourseTitle/CourseTitle';
import './Courses.css'

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div className='course-container'>
            <div className='title-container grid gap-2 m-6'>
                {
                    courses.map(course => <CourseTitle key={course.id} course={course}></CourseTitle>)
                }
            </div>
            <div className='card-container'>
                {
                    courses.map((course, indX) => <Course key={indX} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;