import { useLoaderData, useLocation, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";


const UpdateToy = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/mytoys";


    const data = useLoaderData()


    const handleUpdateToy = event => {
        event.preventDefault()
        const form = event.target;

        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;


        const updatedToy = { price, quantity, description }

        console.log (updatedToy)
    

        // send data to the server


        fetch(`https://vintage-car-server.vercel.app/toy/${data._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Thank you'
                    })
                    navigate(from, { replace: true });
                }
            })


    }

    return (
        <form onSubmit={handleUpdateToy} className="container mx-auto  h-screen">
            <h1 className="text-center text-3xl font-bold my-4">Update Toy: {data.toyName}</h1>
            <div className=" px-3 mb-6 md:mb-4">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Price
                </label>
                <input defaultValue={data.price} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" name="price" placeholder="Price" />
            </div>
            <div className="  px-3 mb-6 md:mb-4">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Available Quantity
                </label>
                <input defaultValue={data.quantity} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="number" name="quantity" placeholder="quantity" />
            </div>
            <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Details Description
                </label>
                <input defaultValue={data.description} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" name="description" placeholder="Details Description" />

            </div>

            <div className="w-full px-3 flex justify-center">
            <input className="btn btn-success text-white my-4" type="submit" value="Update" />
            </div>
        </form>
    );
};

export default UpdateToy;