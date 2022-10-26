import React from 'react';
//import { useLoaderData } from 'react-router-dom';

// experimental
//import ReactDOM from 'react-dom/client';
import Pdf from "react-to-pdf";


const ref = React.createRef();

const CourseDetails = () => {
    // const details = useLoaderData();
    //npm install react-to-pdf
    //console.log(details);
    return (
        <div>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            <div ref={ref}>
                <h1>Hello</h1>
                <h2>Put Your Data Here</h2>
            </div>
        </div>
    );
};

//const root = ReactDOM.createRoot(document.getElementById('root'));

// const rootElement = document.getElementById("root");
// ReactDOM.render(<CourseDetails/>, rootElement);

export default CourseDetails;