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
  
    return (
        <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Update Profile</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="avatar mx-auto mt-6">
                        <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user.photoURL ? user.photoURL : "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"} alt='user-avater' />
                            <h2 className='text-2xl font-semibold'>{user?.displayName && user.displayName}</h2>
                        </div>
                        <hr />
                        </div>
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
                        <input type="text" placeholder="Put url Here" name='photo' required className="input input-bordered" />
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
                        <input type="password" placeholder="password" name='password' required className="input input-bordered" />
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