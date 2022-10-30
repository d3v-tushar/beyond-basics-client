import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import Pdf from "react-to-pdf";


const ref = React.createRef();
console.log(ref);

const Enroll = ({course}) => {
    const {user} = useContext(AuthContext);
    const {id, title, discripOne, summary, discripTwo, fees, content} = course;
    const sortedContent = content.slice(0, 20);
    return (
        <Pdf filename={`${id}.pdf`}>
            {({toPdf, targetRef: ref}) =>  (
            <div className=" min-h-screen bg-base-200 p-6" ref={ref}>
                <div className='lg:grid lg:grid-cols-3 gap-3'>
                    {/* sideBar #1 */}
                <div className="h-full px-6 space-y-2 w-full dark:bg-gray-900 dark:text-gray-100 mb-4">
                        <div className="flex items-center justify-center p-2 space-x-4  my-4 mx-auto border">
                        <img src={user?.photoURL ? user.photoURL : "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"} alt="Pic" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                        <div>
                            <h2 className="text-lg font-semibold">{user?.displayName ? user.displayName : "Your Name"}</h2>
                                <span className="flex items-center space-x-1">
                                    <Link to='/profile' className="text-xs hover:underline dark:text-gray-400">View Profile</Link>
                                </span>
                            </div>
                        </div>
                            <nav className="space-y-8 text-sm">
                                <div className="m-auto">
                                    <h2 className="text-xl mt-6 font-semibold tracking-widest uppercase text-gray-400">Course Content</h2>
                                    <div className="flex flex-col space-y-1 text-left">
                                        <ol className='list-decimal text-lg font-semibold mx-auto p-3'>
                                            {
                                                course.content.map((con, indx) => <li key={indx} className='m-3'>{con}</li>)
                                            }
                                        </ol>
                                    </div>
                                </div>
                            </nav>
                        </div>

                        {/* sideBar #2 */}
                        <div className='col-span-2 w-full p-6 sm:w-12/12 bg-gray-900 text-gray-100'>
                        <div className=" flex-col lg:flex-row-reverse">
                            <div className="carousel w-full mb-5">
                            <div id="slide1" className="carousel-item relative w-full">
                            <img src={course.imgWide} className="w-full" alt='slider' />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            </div>
                            </div>
                        </div> 
                        </div>
                            <h1 className='text-4xl my-6'>
                                {title}
                            </h1>

                        
                            <div className="w-full my-6"> 
                                <div className="card border">
                                    <div className="card-body">
                                        <div className='card-title grid grid-cols-5 text-3xl lg:text-5xl'><h1><span className='text-yellow-400'><i className="fa-solid fa-star"></i></span> {course.rating.rate}</h1> 
                                        <div className="divider lg:divider-horizontal"></div>
                                        <h1><span className='text-white'><i className="fa-solid fa-clock text-yellow-400"></i></span> {course.duration}</h1>
                                        <div className="divider lg:divider-horizontal"></div>
                                        <h1><span><i className="fa-solid fa-dollar-sign text-yellow-400"></i></span> {fees}</h1>
                                        </div> 
                                    </div>
                                </div>
                            </div>

                            <Link to={`/checkout/${id}`}><button className='btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-black mx-2'>Premium Access</button></Link>
                            <button className='btn bg-gradient-to-r from-red-400 to-yellow-300 hover:from-blue-500 hover:to-violate-500 mx-2 text-black' onClick={toPdf}>Download PDF</button>

                            <div className="card">
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title underline">{summary}</h2>
                                    <p className='text-left text-lg my-5'>{discripOne}</p>
                                    <img src={course.img} alt="" />
                                    <p className='text-left text-lg my-5'>{discripTwo}</p>
                                </div>
                            </div>
                            <p>
                            {
                                sortedContent.map((con, indx) => <small key={indx}> <i class="fa fa-hashtag"></i>{con}</small>)
                            }
                            </p>
                        </div>
                </div>

                        
            </div>
            )}
                
        </Pdf>
    );
};

export default Enroll;