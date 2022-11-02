import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Register = () => {
    const {newUserRegister, emailVerification, updateUserProfileData} = useContext(AuthContext);
    const [error, setError] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleRegister = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        //Password Validation (Regular Expression)
        if(!/(?=.*[A-Z])/.test(password)){
            setPasswordError('Please provide atleast one uppercase.');
            setError(true);
            return;
        }
        if(password.length < 8){
            setPasswordError('Password should be atleast 8 characters.');
            setError(true);
            return;
        }
        if(!/(?=.*[!@#$%*])/.test(password)){
            setPasswordError('Please use atleast 1 special character.');
            setError(true);
            return;
        }

        newUserRegister(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setError(false);
            updateProfile(name, photo);
            form.reset();
            handleEmailVerification();
            setSuccess(true);
        })
        .catch(error =>{
            console.error(error.message);
            setPasswordError(error.message);
        })
    }

    const updateProfile = (name, photo) =>{
        updateUserProfileData(name, photo)
        .then(() => console.log("Registration Done!"))
        .catch(error =>{
            console.error(error.message);
            setPasswordError(error.message);
        })
    }

    //Email Verification
    const handleEmailVerification = () =>{
        emailVerification()
        .then(() =>{
            toast.success('Verification Email Sent!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Please Register Now!</h1>
                    </div>

                        
                        {
                            error && 
                            <div className="alert alert-error shadow-lg">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>{passwordError}</span>
                            </div>
                            </div>
                        }
                        
                        
                        {
                            success && 
                            <div className="alert alert-success shadow-lg">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                              <span>Account Created Successfully!</span>
                            </div>
                            </div>
                        }
                        
                    
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name='name' required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Put url Here" name='photo' required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' required className="input input-bordered" />
                        <label className="label">
                            <Link to='/login' className="label-text-alt link link-hover">Already have a account?</Link>
                        </label>
                        </div>
                        <div className="form-control mt-2">
                        <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    </div>
                </div>
                <ToastContainer/>
            </div>
    );
};

export default Register;