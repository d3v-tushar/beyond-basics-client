import React from "react";
import { Link } from "react-router-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const DownloadPDF = ({ course }) => {
  const { id, title, discripOne, summary, discripTwo, fees, content } = course;
  const sortedContent = content.slice(0, 20);
  return (
    <Pdf filename={`${id}.pdf`}>
      {({ toPdf, targetRef: ref }) => (
        <div
          className="bg-gray-900 text-gray-100 px-6 py-6 w-full"
          style={{ width: 800 }}
          ref={ref}
        >
          <div className=" flex-col lg:flex-row-reverse">
            <div className="carousel w-full mb-5">
              <div id="slide1" className="carousel-item relative w-full">
                <img src={course.imgWide} className="w-full" alt="slider" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
              </div>
            </div>
          </div>
          <h1 className="text-4xl my-6">{title}</h1>

          <div className="w-full my-6">
            <div className="card border">
              <div className="card-body">
                <div className="card-title grid grid-cols-5 text-3xl lg:text-5xl">
                  <h1>
                    <span className="text-yellow-400">
                      <i className="fa-solid fa-star"></i>
                    </span>{" "}
                    {course.rating.rate}
                  </h1>
                  <div className="divider lg:divider-horizontal"></div>
                  <h1>
                    <span className="text-white">
                      <i className="fa-solid fa-clock text-yellow-400"></i>
                    </span>{" "}
                    {course.duration}
                  </h1>
                  <div className="divider lg:divider-horizontal"></div>
                  <h1>
                    <span>
                      <i className="fa-solid fa-dollar-sign text-yellow-400"></i>
                    </span>{" "}
                    {fees}
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <Link to={`/checkout/${id}`}>
            <button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-black mx-2">
              Premium Access
            </button>
          </Link>
          <button
            className="btn bg-gradient-to-r from-red-400 to-yellow-300 hover:from-blue-500 hover:to-violate-500 mx-2 text-black"
            onClick={toPdf}
          >
            Download PDF
          </button>

          <div className="card">
            <div className="card-body items-center text-center">
              <h2 className="card-title underline">{summary}</h2>
              <p className="text-left text-lg my-5">{discripOne}</p>
              <img src={course.img} alt="" />
              <p className="text-left text-lg my-5">{discripTwo}</p>
            </div>
          </div>
          <p>
            {sortedContent.map((con, indx) => (
              <small key={indx}>
                {" "}
                <i class="fa fa-hashtag"></i>
                {con}
              </small>
            ))}
          </p>
        </div>
      )}
    </Pdf>
  );
};

export default DownloadPDF;
