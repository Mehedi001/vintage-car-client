/* eslint-disable no-unused-vars */
import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ImSpinner2 } from "react-icons/im";
import useTitle from "../../hooks/useTitle";


const AllToys = () => {


    const [toys, setToys] = useState([]);
    const {loading, setLoading} = useContext(AuthContext)
    const searchRef = useRef(null);
    const [search, setSearch] = useState('');


    useTitle('All Toys');

    useEffect(() => {
        setLoading(true);
      
        fetch(`https://vintage-car-server.vercel.app/toy?&search=${search}`)
            .then(res => res.json())
            .then(data => {
                setToys(data.slice(0, 20))
                setLoading(false)
            })
    }, [search])
    

    const handleSearch= () =>{
        event.preventDefault();
        console.log (searchRef.current.value)
        setSearch(searchRef.current.value)
    }

    if (loading) {
        return (<div className='my-48'><ImSpinner2 className='text-9xl mx-auto animate-spin '/></div>)
    }

    return (
        <div className="my-12 container mx-auto">
            <h1 className="text-3xl font-bold text-center my-6">All Toys are Here</h1>
            <form className="my-4">
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" ref={searchRef} placeholder="Search…" className="input input-bordered bg-white" />
                        <button onClick={handleSearch} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </form>

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
                            toys.map((toy, i) =>
                                <tr key={toy._id}>
                                    <th>{i + 1}</th>
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
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default AllToys;