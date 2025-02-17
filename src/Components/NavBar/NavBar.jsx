import { NavLink } from "react-router-dom";

import './NavBar.css'
const NavBar = () => {
    return (
        <div className="mt-5">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content space-y-2 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to={'/'} className='text-center'>Home</NavLink>
                            <NavLink to={'/listedbooks'} className='text-center'>Listed Books</NavLink>
                            <NavLink to={'/pagestoread'} className='text-center'>Pages to Read</NavLink>
                            <NavLink to={'/popular'} className='text-center'>Most Popular</NavLink>
                            <NavLink to={'/kidsjone'} className='text-center'>Kids Jone</NavLink>
                           
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl font-bold">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg gap-5 flex justify-center items-center">
                        

                        <NavLink to={'/'} className='px-3 py-2'>Home</NavLink>
                        <NavLink to={'/listedbooks'} className='px-3 py-2'>Listed Books</NavLink>
                        <NavLink to={'/pagestoread'} className='px-3 py-2'>Pages to Read</NavLink>
                        <NavLink to={'/popular'} className='px-3 py-2'>Most Popular</NavLink>
                        <NavLink to={'/kidsjone'} className='px-3 py-2'>Kids Jone</NavLink>

                    </ul>
                </div>
                <div className="navbar-end flex gap-2">
                    <a className="btn bg-[#23BE0A] text-white font-semibold">Sign In</a>
                    <a className="btn bg-[#59C6D2] text-white font-semibold">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;