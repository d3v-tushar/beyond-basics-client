import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100 min-w-screen min-h-screen">
            <div className="container justify-center p-6 px-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between sm:grid grid-cols-2 gap-5 justify-items-center">
                <div className="flex items-center justify-end p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-full xl:h-112 2xl:h-128">
                    <img src="https://www.mambaui.com/assets/svg/Business_SVG.svg" alt="" className="object-contain h-full sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">Beyond
                        <span className="dark:text-violet-400"> Basics</span><br />
                        <span className='text-3xl'>Learn without limits</span>
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">
                        <br/> Start, Switch, or Advance your career with Advance Courses, Professional Certificates, and degrees from world-class universities and companies.


                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link to='/courses'><button className='btn'>Courses</button></Link>
                        <Link to='/register'><button className='btn btn-info'>Register</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;