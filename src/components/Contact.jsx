/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */


const Contact = () => {
    return (
        <div  className="my-12">
            
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-[#f3f3f3] text-gray-100">
                <div data-aos="fade-down" className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight text-[#709F9D] lg:text-5xl">Let's talk!</h2>
                        <div className="text-gray-400">Let us know your suggestions.</div>
                    </div>
                    <img src="doodle.svg" alt="" className="p-6 h-52 md:h-64" />
                </div>
                <form data-aos="fade-up"  className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div>
                        <label htmlFor="name" className="text-sm text-gray-400">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full p-3 rounded bg-gray-50" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm text-gray-400">Email</label>
                        <input id="email" type="email" className="w-full p-3 rounded bg-gray-50" />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm text-gray-400">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 rounded bg-gray-50"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#709F9D] text-gray-50">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;