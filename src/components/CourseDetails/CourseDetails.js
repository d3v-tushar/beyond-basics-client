import React from "react";
// import ReactDOM from "react-dom/client";
// import Pdf from "react-to-pdf";
import Enroll from "../Enroll/Enroll";

//const ref = React.createRef();

function CourseDetails() {
  return (
    <div>
      {/* <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div ref={ref}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Enroll></Enroll>
      </div> */}
      <Enroll></Enroll>
    </div>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.createRoot(<CourseDetails />, rootElement);


export default CourseDetails;