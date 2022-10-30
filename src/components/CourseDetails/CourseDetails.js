import React from "react";
import { useLoaderData } from 'react-router-dom';
import Enroll from "../Enroll/Enroll";


function CourseDetails() {
    const course = useLoaderData();
  return (
    <div>
        <Enroll course={course}></Enroll>
    </div>
  );
}


export default CourseDetails;