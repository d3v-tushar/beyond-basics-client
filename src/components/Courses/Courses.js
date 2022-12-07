import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
//import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import CourseTitle from '../CourseTitle/CourseTitle';
import './Courses.css';


const Courses = () => {
    const [courseData, setCourseData] = useState([]);
    const [spinner, setSpinner] = useState(true);
    useEffect(() =>{
        fetch('https://beyond-basics-server.vercel.app/courses')
        .then(response => response.json())
        .then(data =>{
            setCourseData(data);
            setSpinner(false);
        })
    },[]);

    if(spinner){
        return (
            <div className="flex justify-center space-x-2 my-8 min-h-screen">
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-cyan-400"></div>
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-cyan-400"></div>
                <div className="w-4 h-4 rounded-full animate-pulse dark:bg-cyan-400"></div>
            </div>
        );
    };

    return (
        <div className='course-container min-h-screen'>
            <div className='title-container grid gap-4 m-6'>
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