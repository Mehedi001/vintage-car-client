import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllToys = () => {


    const [toys, setToys] = useState([]);

   

    useEffect (() => {
        fetch('http://localhost:8800/toy')
        .then(res => res.json())
        .then (data => setToys(data))
    } ,[])
    return (
        <div className="my-12 container mx-auto">
            <h1 className="text-3xl font-bold text-center my-6">All Toys is Here</h1>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map((toy, i)=>
                            <tr key={toy._id}>
                            <th>{i+1}</th>
                            <td>{toy.sellerName}</td>
                            <td>{toy.toyName}</td>
                            <td>{toy.category}</td>
                            <td>{toy.price}</td>
                            <td>{toy.quantity}</td>
                            <td><Link to={`/toy/${toy._id}`} className="btn btn-sm">details</Link></td>
                        </tr>
                        )
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default AllToys;