/* eslint-disable react/no-unescaped-entities */

import useTitle from "../../hooks/useTitle";




const Blog = () => {

    useTitle('Blog')
    return (
        <div className="md:flex justify-center items-center mx-auto">
            <div className=" mt-6 md:mt-0 min-h-[300px] w-2/3 lg:min-h-[800px]  text-[#709F9D] flex flex-col justify-center items-center">
                <img src="question.png" alt="" />
                <h1 className="text-4xl font-bold">WELCOME TO <br /> <span className="text-7xl text-gray-600 font-bold">BLOG !!!</span></h1>
            </div>
            <div className="w-full mx-auto px-8 mt-20 space-y-2 md:pr-8 ">
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
                    <h1 className="text-xl font-bold text-center">SQL vs NoSQL</h1>
                        <p className="text-sm leading-6 italic text-gray-500 lg:flex items-center gap-14">
                            
                            <ul>
                                <h1 className="text-xl font-bold">SQL</h1>
                                <li className="list-disc">Stands for Structured Query Language</li>
                                <li className="list-disc">Relational database management system (RDBMS)</li>
                                <li className="list-disc">Suitable for structured data with predefined schema</li>
                                <li className="list-disc">Data is stored in tables with columns and rows</li>
                                <li className="list-disc">Follows ACID properties (Atomicity, Consistency, Isolation, Durability) for transaction management</li>
                            </ul>
                            <ul>
                            <h1 className="text-xl font-bold mt-6 lg:mt-0">NoSQL</h1>
                                <li className="list-disc">Stands for Not Only SQL</li>
                                <li className="list-disc">Non-relational database management system</li>
                                <li className="list-disc">Suitable for unstructured and semi-structured data</li>
                                <li className="list-disc">Data is stored in collections or documents</li>
                                <li className="list-disc">Does not necessarily follow ACID properties</li>
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
                        NestJS is a framework for developing modern server-side applications in Node. js. It is built on top of Express, a popular server framework for Node. js, and provides a robust set of features for building efficient, scalable, and enterprise-grade applications.
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
                        Aggregation is the process of going through various phases with a huge collection of documents to process them. A pipeline is made up of the several stages. Filtering, sorting, grouping, reshaping, and altering documents as they move through a pipeline are all possible.
                        </p>
                    </div>
                </details>
            </div>
        </div>
    );
};

export default Blog;