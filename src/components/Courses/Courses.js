import React from 'react';
// import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import CourseTitle from '../CourseTitle/CourseTitle';
import './Courses.css'

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);

    // const showStar = (courses) =>{
    //     courses.forEach(element => {
    //         const initialRate = ((element.rating)+'').split(".");
    //         let [firstRate, secondRate] = initialRate;
    //         if(secondRate === undefined){
    //             secondRate='0';
    //         }
    //         const newFirstRate = +firstRate;
    //         const newSecondRate = +secondRate;
            
    //         const ol = document.getElementById('star');
    //         const li = document.createElement('li');
    
    //         for(let i=1; i<= newFirstRate; i++){
    //             const span = document.createElement('span');
    //             span.classList.add("star-color");
    //             span.innerHTML=`<i class="fas fa-star"></i>`;
    //             li.appendChild(span);
    //         }
    //         const span = document.createElement('span');
    //         span.classList.add("star-color");
    //         if(newSecondRate >0 && newSecondRate <=5){
    //             span.innerHTML=`<i class="far fa-star"></i>`;
    //         }
    //         else if(newSecondRate >5 && newSecondRate <10){
    //             span.innerHTML=`<i class="fas fa-star-half-alt"></i>`;
    //         }
    //         li.appendChild(span);
    //         ol.appendChild(li);
    //     });
    // }

    // useEffect(() =>{
    //     showStar(courses);
    // },[courses])
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