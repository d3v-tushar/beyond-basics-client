import React from 'react';

const Blog = () => {
    return (
        <div className='min-h-screen grid justify-items-center mt-5 mx-2'>
            <div className="card md:w-10/12 bg-gray-900 text-gray-100 my-5">
            <div className="card-body items-center">
                <h2 className="card-title text-2xl">1. What is CORS?</h2>
                <p className='text-justified'><span className='font-semibold'> Answer(1)</span>: Cross-Origin Resource Sharing (CORS)
                    Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. <br />
                    <br />
                    
                     CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                </p>
                </div>
            </div>


            <div className="card md:w-10/12 bg-gray-900 text-gray-100 my-5">
            <div className="card-body items-center">
                <h2 className="card-title text-2xl">2. Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p><span className='font-semibold'> Answer(2.1)</span>: Firebase give users a quick, intuitive sign-in process with
                Firebase Authentication. Allow users to sign in to your app with their Facebook, Twitter, Google,
                or GitHub account with less than 5 minutes of work. <br />
                    <br />
                    
                    <span className='font-semibold'> Answer(2.2)</span>: Seamlessly authenticate with Firebase Authentication, then set up a chat room in the Realtime Database. Messages appear on all your users' devices in realtime. Use Firebase Cloud Messaging to send notifications so that your users get new messages if they're in another app.
                </p>
                </div>
            </div>


            <div className="card md:w-10/12 bg-gray-900 text-gray-100 my-5">
            <div className="card-body items-center">
                <h2 className="card-title text-2xl">3. How does the private route work?</h2>
                <p><span className='font-semibold'> Answer(3)</span>: The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in). <br />
                    <br />
                    
                    So this PrivateRoute component uses a hook named useAuth. Through this hook, we can access the loginStatus, which is set to true when logged in and false when logged out.
                </p>
                </div>
            </div>

            <div className="card md:w-10/12 bg-gray-900 text-gray-100 my-5">
            <div className="card-body items-center">
                <h2 className="card-title text-2xl">4. What is Node? How does Node work?</h2>
                <p><span className='font-semibold'> Answer(4.1)</span>: Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine). Node.js was developed by Ryan Dahl in 2009 and its latest version is v0.10.36. The definition of Node.js as supplied by its official documentation is as follows − <br />
                    <br />
                    
                    <span className='font-semibold'> Answer(4.2)</span>: Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.
                </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;