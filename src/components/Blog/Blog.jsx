

const Blog = () => {
    return (
        <div className="lg:grid grid-cols-2">
            <div className="min-h-[300px] lg:w-2/3 lg:min-h-[800px]  text-[#709F9D] flex flex-col justify-center items-center">
                <img src="question.png" alt="" />
                <h1 className="text-4xl font-bold">WELCOME TO <br /> <span className="text-7xl text-gray-600 font-bold">BLOG !!!</span></h1>
            </div>
            <div className="w-full px-8 mt-20 space-y-2 shadow lg:max-w-md">
                <details className="p-4 rounded-lg">
                    <summary className="font-semibold">What is an access token and refresh token? How do they work and where should we store them on the client-side?</summary>
                    <div className="mt-3">
                        <p className="text-sm leading-6 italic text-gray-500">
                            Refresh tokens allow to balance users' access needs with organization's security practices. <br />
                            -Store process to client side- <br />
                            1. Store it in local browser storage. ... <br />
                            2. Store it in a cookie in client side, it can be safer than local browser storage. <br />
                            3. Don't store the token but store username and password in the browser or client-side cookie, and then retrieve a new token by sending credentials silently.
                        </p>
                    </div>
                </details>
                <hr />
                <details className="p-4 rounded-lg">
                    <summary className="font-semibold">
                        Compare SQL and NoSQL databases?
                    </summary>
                    <div className="mt-3">
                        <p className="text-sm leading-6 italic text-gray-500 flex items-center">
                            <ul>
                                <li>Stands for Structured Query Language</li>
                                <li>Relational database management system (RDBMS)</li>
                                <li>Suitable for structured data with predefined schema</li>
                                <li>Data is stored in tables with columns and rows</li>
                                <li></li>
                            </ul>
                            <ul>
                                <li>Stands for Not Only SQL</li>
                                <li>Non-relational database management system</li>
                                <li>Suitable for unstructured and semi-structured data</li>
                                <li>	Data is stored in collections or documents</li>
                                <li></li>
                            </ul>
                        </p>
                    </div>
                </details>
                <hr />
                <details className="p-4 rounded-lg">
                    <summary className="font-semibold">
                        What is express js? What is Nest JS ?
                    </summary>
                    <div className="mt-3">
                        <p className="text-sm leading-6 italic text-gray-500">
                            React with Tailwind CSS Faq Accordion 3
                        </p>
                    </div>
                </details>
                <hr />
                <details className="p-4 rounded-lg">
                    <summary className="font-semibold">
                        What is MongoDB aggregate and how does it work ?
                    </summary>
                    <div className="mt-3">
                        <p className="text-sm leading-6 italic text-gray-500">
                            React with Tailwind CSS Faq Accordion 4
                        </p>
                    </div>
                </details>
            </div>
        </div>
    );
};

export default Blog;