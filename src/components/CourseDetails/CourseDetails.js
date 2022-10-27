import React from "react";
import { createContext } from "react";
import { useLoaderData } from 'react-router-dom';
// import ReactDOM from "react-dom/client";
// import Pdf from "react-to-pdf";
import Enroll from "../Enroll/Enroll";

export const CourseData = createContext();

function CourseDetails() {
    const course = useLoaderData();
    const courseInfo ={course}
  return (
    <div>
        <CourseData.Provider value={courseInfo}>
             <Enroll></Enroll>
        </CourseData.Provider>
    </div>
  );
}


export default CourseDetails;