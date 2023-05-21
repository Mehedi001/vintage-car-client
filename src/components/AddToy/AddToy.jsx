/* eslint-disable react/no-unknown-property */

import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const AddToy = () => {

    const {user} = useContext(AuthContext);


    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const email = form.email.value;
        const category = form.category.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const newToy = {toyName, photo, sellerName, quantity, rating, price,email,category, description}
        console.log (newToy)

        fetch('https://vintage-car-server.vercel.app/toy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
        .then (res => res.json())
        .then (data => {
            if (data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Toy Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Thank you'
                  })
                  form.reset('');
            }
        })
    }

    return (
        <div className="my-8 p-2 lg:p-20">
            <h1 className=" text-3xl lg:text-6xl text-center font-semibold">Add New Toy</h1>
            <form onSubmit={handleAddToy} className="w-full max-w-lg mx-0 lg:my-28 lg:mx-auto">
                <div className="flex flex-wrap lg:-mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                            Toy Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" name="toyName" placeholder="Name of Toy" />
                        
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Seller Name
                        </label>
                        <input value={user?.displayName} className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" name="sellerName" placeholder="Seller Name" />
                        
                    </div>
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Email
                        </label>
                        <input value={user?.email} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email"  name="email" placeholder="E-mail" />
                    </div>
                </div>
               

                <div className="flex flex-wrap lg:-mx-3 mb-6">
                        <label className="block mx-3 uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Sub-Category
                        </label>
                        <div className="w-full relative px-3">
                            <select name="category" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option>Regular</option>
                                <option>Sports</option>
                                <option>Vintage</option>
                                <option>Military</option>
                                <option>Bus</option>
                            </select>
                            <div className="pointer-events-none absolute -inset-y-2 right-4 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                            <p className="text-gray-600 text-xs italic">Give your toy sub-category</p>
                        </div>
                    </div>

                <div className="flex flex-wrap lg:-mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Price
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" name="price" placeholder="Price" />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Rating
                        </label>
                        <div className="relative">
                            <select name="rating" className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Available Quantity
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" name="quantity" placeholder="quantity" />
                    </div>
                </div>
                <div className="flex flex-wrap lg:-mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Details Description
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" name="description" placeholder="Details Description" />
                        
                    </div>
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Photo URL
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" name="photo" placeholder="Photo URL" />
                        
                    </div>
                </div>
                <input className="bg-[#709F9D] btn w-full border-0 text-white rounded-md px-2 py-1" type="submit" value="Add" />
            </form>

        </div>
    );
};

export default AddToy;