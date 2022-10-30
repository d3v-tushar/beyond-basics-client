import React from 'react';

const FAQ = () => {
    return (
        <section className="bg-gray-800 text-gray-100 min-h-screen">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
            <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
            <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                <div>
                    <h3 className="font-semibold">What do Beyond Basics courses include?</h3>
                    <p className="mt-1 text-gray-400">Each Beyond Basics course is created, owned and managed by the instructor(s). The foundation of each Beyond Basics course are its lectures, which can include videos, slides, and text. In addition, instructors can add resources and various types of practice activities, as a way to enhance the learning experience of students. </p>
                </div>
                <div>
                    <h3 className="font-semibold">What if I don’t like a course I purchased?</h3>
                    <p className="mt-1 text-gray-400">We want you to be satisfied, so all eligible courses purchased on Beyond Basics can be refunded within 30 days. If you are unhappy with a course, you can request a refund, provided the request meets the guidelines in our refund policy. </p>
                </div>
                <div>
                    <h3 className="font-semibold">Where can I go for help?</h3>
                    <p className="mt-1 text-gray-400">If you find you have a question about a paid course while you’re taking it, you can search for answers to your question in the Q&A or ask the instructor. <br />
                    Our Help Center has extensive information regarding Beyond Basics’s various features, and articles with troubleshooting steps to help you quickly resolve any issues you encounter. Our support team is also happy to help. 
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold">Is Beyond Basics an accredited institution? Do I receive anything after I complete a course?</h3>
                    <p className="mt-1 text-gray-400">While Beyond Basics is not an accredited institution, we offer skills-based courses taught by real-world experts in their field. Every approved, paid course features a certificate of completion to document your accomplishment.
                    <br />
                    We encourage you to visit the websites for these third parties and read their terms of use, privacy policies. This list is not exhaustive and will be updated from time to time.
                    </p>
                </div>
            </div>
        </div>
    </section>
    );
};

export default FAQ;