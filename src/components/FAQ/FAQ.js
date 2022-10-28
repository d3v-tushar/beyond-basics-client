import React from 'react';

const FAQ = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">FRIQUIBTLY ASK QUESTIONS</h1>
            <div tabIndex={0} className="collapse-title bg-primary text-primary-content group-focus:bg-secondary group-focus:text-secondary-content my-3">
                {/* Q-1 */}
            <div className="collapse-title text-xl font-medium">
                Focus me to see content
            </div>
            <div className="collapse-content"> 
                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
            </div>
            </div>

            {/* Q-2 */}
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-3">
            <div className="collapse-title text-xl font-medium">
                Focus me to see content
            </div>
            <div className="collapse-content"> 
                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
            </div>
            </div>

            {/* Q-3 */}
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-3">
            <div className="collapse-title text-xl font-medium">
                Focus me to see content
            </div>
            <div className="collapse-content"> 
                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
            </div>
            </div>

            {/* Q-4 */}
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-3">
            <div className="collapse-title text-xl font-medium">
                Focus me to see content
            </div>
            <div className="collapse-content"> 
                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
            </div>
            </div>
            
            </div>
        </div>
        </div>
    );
};

export default FAQ;