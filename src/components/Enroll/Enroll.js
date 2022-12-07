import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import DownloadPDF from './DownloadPDF';
//import Pdf from "react-to-pdf";


//const ref = React.createRef();

const Enroll = ({course}) => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleProfile = () =>{
        navigate('/profile');
    }
    return (
            <div className="bg-base-200 p-6">
                <div className='lg:grid lg:grid-cols-5 gap-3'>
                    {/* sideBar #1 */}
                <div onClick={handleProfile} className="col-span-2 h-full px-6 space-y-2 w-full dark:bg-gray-900 dark:text-gray-100 mb-4">
                        <div className="flex items-center justify-center p-2 space-x-4  my-4 mx-auto border rounded-md">
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
                        <div className='col-span-3 sm:w-12/12 grid justify-center'>
                            <DownloadPDF course={course}></DownloadPDF>
                        </div>
                </div>        
            </div>
    );
};

export default Enroll;