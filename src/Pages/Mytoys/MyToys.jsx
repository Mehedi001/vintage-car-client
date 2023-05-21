import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { ImSpinner2 } from "react-icons/im";
import { AuthContext } from "../../AuthProvider/AuthProvider";



const MyToys = () => {

    const { user, loading, setLoading } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch(`https://vintage-car-server.vercel.app/toymail?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
                setLoading(false);
            })
    }, [])



    const handleDelete = _id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://vintage-car-server.vercel.app/toy/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(toy => toy._id !== _id);
                            setToys(remaining);
                        }
                    }
                    )

            }
        })
    }

    if (loading) {
        return (<div className='my-48'><ImSpinner2 className='text-9xl mx-auto animate-spin ' /></div>)
    }

    return (
        <div className="my-12 container mx-auto">
            <h1 className="text-3xl font-bold text-center my-6"> {toys.sellerName} Toys</h1>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Toy Name</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Update</th>
                            <th>Delete</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map((toy, i) =>
                                <tr key={toy._id}>
                                    <th>{i + 1}</th>
                                    <td>{toy.toyName}</td>
                                    <td>{toy.category}</td>
                                    <td>{toy.price}</td>
                                    <td>{toy.quantity}</td>
                                    <td><Link to={`/updateToy/${toy._id}`} className="btn btn-sm btn-success text-white">Update</Link></td>

                                    <td><button onClick={() => handleDelete(toy._id)} className="btn btn-sm btn-error text-white">Delete</button></td>
                                    <td><Link to={`/toy/${toy._id}`} className="btn btn-sm">details</Link></td>
                                </tr>
                            )
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Toy Name</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Update</th>
                            <th>Delete</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default MyToys;