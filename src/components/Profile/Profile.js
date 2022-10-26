import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
    const {user, updateUserProfileData, updateNewPassword} = useContext(AuthContext);

    const handleUpdate = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const password = form.password.value;
        updateProfile(name, photo);
        handleUpdatePassword(password);
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
    }


    const updateProfile = (name, photo) =>{
        updateUserProfileData(name, photo)
        .then(() => console.log("Name & Photo Updated!"))
        .catch(error => console.error(error.message))
    }

    //Update Password
    const handleUpdatePassword = (password) =>{
        updateNewPassword(password)
        .then(() => console.log('Password Updated'))
        .error(error => console.error(error.message))
    };
    //Email Verification
    // const handleEmailVerification = () =>{
    //     emailVerification()
    //     .then(() =>{
    //         toast.success('Verification Email Sent!', {
    //             position: "top-center",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "colored",
    //             });
    //     })
    // }
    return (
        <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Update Your Profile</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleUpdate} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name='name' defaultValue={user?.displayName} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Put url Here" name='photo' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder='email' defaultValue={user?.email ? user.email : 'hidden'} name='email' readOnly className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" />
                        <label className="label">
                        </label>
                        </div>
                        <div className="form-control mt-2">
                        <button className="btn btn-primary">Update Profile</button>
                        </div>
                    </form>
                    </div>
                </div>
                <ToastContainer/>
            </div>
    );
};

export default Profile;