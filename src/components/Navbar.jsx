import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext); 

    return (
        <div>
            <div className="navbar bg-base-100  container px-4 mx-auto">
                <div className="flex-1">
                    <a className="btn btn-ghost text-3xl font-lato font-bold ">Job Bid Portal</a>
                </div>
                <div className="flex gap-2">
                    <Link to={'/'}><button>Home</button></Link>
                    {!user ? (
                       <Link to={'/login'}> <button>Login</button></Link>
                    ) : (
                        <div className="dropdown dropdown-end">
                            <button 
                                tabIndex={0} 
                                role="button" 
                                aria-label="User menu" 
                                className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full" title={user?.displayName}>
                                    <img
                                        alt="User Avatar"
                                        src={user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} 
                                    />
                                </div>
                            </button>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1000] mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a onClick={logOut}>Logout</a></li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
