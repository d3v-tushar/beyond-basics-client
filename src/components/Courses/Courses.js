import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
//import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import CourseTitle from '../CourseTitle/CourseTitle';
import './Courses.css';


const Courses = () => {
    const [courseData, setCourseData] = useState([]);
    useEffect(() =>{
        fetch('courses.json')
        .then(response => response.json())
        .then(data => setCourseData(data))
    },[]);

    return (
        <div className='course-container min-h-screen'>
            <div className='title-container grid gap-2 m-6'>
                {
                   courseData && courseData.map((course, index) => <CourseTitle key={index} course={course}></CourseTitle>)
                }
            </div>
            <div className='card-container'>
                {
                    courseData && courseData.map((course, indX) => <Course key={indX} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;