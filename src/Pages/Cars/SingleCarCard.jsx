/* eslint-disable react/no-unescaped-entities */

import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";



const SingleCarCard = () => {
    const data = useLoaderData()
    useTitle(data.toyName)
 
    return (
        <div className="my-16 px-2 lg:px-0 mx-auto container">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className="rounded-md" src={data.photo} alt="Album" /></figure>
                <div className="card-body flex flex-col justify-center">
                    <h2 className="text-6xl">{data.toyName}</h2>
                    <h2 className="text-md font-mono">{data.sellerName}</h2>
                    <h2 className="text-sm font-thin">{data.email}</h2>
                    <h2 className="text-6xl font-semibold text-red-500 my-6">${data.price}</h2>
                    <div>
                    <p className="my-8">{data.description}</p>
                    <p className="text-xl font-medium mt-3">Available Quantity: {data.quantity} Pcs.</p>
                    <p>Rating: {data.rating} Star</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default SingleCarCard;