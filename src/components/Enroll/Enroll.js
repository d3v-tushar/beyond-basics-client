import React from 'react';

const Enroll = ({title, discription}) => {


    const ref = React.createRef();
    return (
        <div>
            <div ref={ref} style={{width: 100, height: 100, background: 'blue'}}>
                    <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" alt='course-img' />
                            <div>
                                <h1 className="text-5xl font-bold">{title}</h1>
                                <p className="py-6">{discription}</p>
                                <button className="btn btn-primary">Enroll Now</button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Enroll;