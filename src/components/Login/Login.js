import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Login = () => {
    const {signInExistingUser, signInWithGoogle, signInWithGitHub} = useContext(AuthContext);
    const navigate = useNavigate();

    //Email Password Login
    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInExistingUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true });
        })
        .catch(error => console.error(error.message))
    };

    //Google Sign in
    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true });
        })
        .catch(error => console.error(error.message))
    };

    //GitHub Sign in
    const handleGithubSignIn = () =>{
        signInWithGitHub()
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true });
        })
    }
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    return (
        <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Please Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body mb-0">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <Link to='/register' className="label-text-alt link link-hover">New User? Please Register</Link>
                        </label>
                        </div>
                        <div className="form-control mt-2 mb-0">
                        <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="divider mt-0">OR</div>
                    <div className="grid h-20 card bg-base-100 rounded-box place-items-center grid-cols-2 gap-2 ">
                    <button onClick={handleGoogleSignIn} className="btn">Google</button>
                    <button onClick={handleGithubSignIn} className="btn">Github</button>
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default Login;