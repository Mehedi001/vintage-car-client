import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Header = () => {
    const { user, logout } = useContext(AuthContext)
    const signOut = () => {
        logout()
    }

    return (
        <nav>
            <div className="navbar bg-[#709F9D] flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/alltoys">All Toys</Link></li>
                            {
                                user && <li><Link to="/mytoys">My Toys</Link></li>
                            }
                            {
                                user && <li><Link to="/addtoy">Add Toy</Link></li>
                            }
                            <li><Link to="/blog">Blogs</Link></li>
                        </ul>
                    </div>
                    <img className="w-20" src="vintage-car.svg" alt="" />
                    <Link to="/"><a className="btn btn-ghost text-white normal-case font-semibold text-xl lg:text-3xl"><span className="text-[#E2D7A7]">Vintage</span>&nbsp;Car</a></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/alltoys">All Toys</Link></li>
                        {
                            user && <li><Link to="/mytoys">My Toys</Link></li>
                        }
                        {
                            user && <li><Link to="/addtoy">Add Toy</Link></li>
                        }
                        <li><Link to="/blog">Blogs</Link></li>

                    </ul>
                </div>

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {user ? <img src={user?.photoURL} title={`${user?.displayName} ( Click her for Logout )`} /> : <img title="This is Profile photo of user" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png" alt="this is profile photo of user" />}
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            {user ? <p className="justify-between">
                                {user?.displayName}
                            </p> : <p className="justify-between">
                                No User Available
                            </p>}
                        </li>
                        {
                            user && <li><p>{user?.email}</p></li>
                        }
                        {
                            user && <li><button onClick={signOut}>Logout</button></li>
                        }
                    </ul>
                </div>


                {/* login page  */}

                {
                    !user && <div className="ml-4">

                        <Link to="/login"><input className="btn" type="submit" value="Login" /></Link>
                    </div>
                }




            </div>
        </nav >
    );
};

export default Header;