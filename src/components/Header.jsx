import { Link } from "react-router-dom";


const Header = () => {
    return (
        <nav>
            <div className="navbar bg-[#709F9D] flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <img className="w-20" src="vintage-car.svg" alt="" />
                    <a className="btn btn-ghost text-white normal-case font-semibold text-3xl"><span className="text-[#E2D7A7]">Vintage</span>&nbsp;Car</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">All Toys</Link></li>
                        <li><Link to="/">My Toys</Link></li>
                        <li><Link to="/">Add a Toys</Link></li>
                        <li><Link to="/blog">Blogs</Link></li>

                    </ul>
                </div>

                <div className="avatar">
                    <div className="w-10 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>

                {/* login page  */}
                
                <div className="ml-4">
                    {/* The button to open modal */}
                    <label htmlFor="my-modal-5" className="btn">Login</label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                    <div className="modal">
                        <form className="modal-box w-11/12 max-w-5xl">


                            <div className="form-control">
                                <h1 className="text-4xl font-bold text-center">Please Login</h1>
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <label className="input-group">
                                    
                                    <input type="email" placeholder="Your Mail" className="input input-bordered" />
                                </label>
                                <label className="label">
                                    <span className="label-text">Your Password</span>
                                </label>
                                <label className="input-group">
                                    
                                    <input type="password" placeholder="Password" className="input input-bordered" />
                                </label>
                            </div>


                            <div className="modal-action">
                                <input className="btn" type="submit" value="Login" />
                                <label htmlFor="my-modal-5" >Close</label>
                            </div>
                        </form>
                    </div>
                </div>




            </div>
        </nav>
    );
};

export default Header;