/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import app from "../../firebase/firebase.config";
import useTitle from "../../hooks/useTitle";

const auth = getAuth(app);



const Login = () => {

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    useTitle('Login')

    const from = location.state?.from?.pathname || "/";
    const googleProvider = new GoogleAuthProvider();



    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                if (!loggedInUser) {
                    setError('Please Check Your email & password')
                }
                setSuccess('User Login Successfull');
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error)
            })


    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                const loggedUser = result.user;
                if (!loggedUser) {
                    setError('Please Check Your email & password')
                }
                setSuccess('User Login Successfull');
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })

            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <div>
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-[#E0A370] to-[#A16B56] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-thin">Already Seller ???  <br /> <span className="text-4xl font-bold text-[#E0A370]">Login Here</span></h1>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <form onSubmit={handleLogin} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">

                                    <div className="relative">
                                        <input id="email" name="email" type="email" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                        <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                    </div>
                                    <div className="relative">
                                        <input id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                        <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                    </div>

                                    <p className="text-red-600">{error}</p>
                                    <p className="text-green-600">{success}</p>

                                    <div className="relative">
                                        <button className="bg-[#E0A370] text-white rounded-md px-2 py-1">Login Now</button>
                                    </div>
                                    <h1>Not a seller ? <Link className="text-[#709F9D] hover:text-blue-600" to="/registration">Register Now</Link> </h1>

                                </form>
                                <div className="relative">
                                    <button onClick={handleGoogleSignIn} className="text-[#E0A370] btn-outline border hover:bg-[#E0A370]  rounded-md px-2 py-1"><FcGoogle className="inline-block"></FcGoogle> Login with Google</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;