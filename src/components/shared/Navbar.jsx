import React from 'react';
import logo from '@/assets/summerLogo.png';
import Image from 'next/image';
import Link from 'next/link';
import user from '@/assets/avator.png'
import { LiaLinkSolid } from 'react-icons/lia';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 border-b border-b-amber-100 w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            <li><Link className='btn bg-amber-50' href={"/"}>Home</Link></li>
                            <li><Link className='btn bg-amber-50' href={"/products"}>Products</Link></li>
                            <li><Link className='btn bg-amber-50' href={"/my-profile"}>My Profile</Link></li>
                        </ul>
                    </div>
                    <Image
                        src={logo}
                        height={100}
                        width={100}
                        alt='logo'
                    />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className='flex justify-between items-center gap-2 text-gray-700'>
                        <li><Link className='btn bg-amber-50' href={"/"}>Home</Link></li>
                        <li><Link className='btn bg-amber-50' href={"/products"}>Products</Link></li>
                        <li><Link className='btn bg-amber-50' href={"/my-profile"}>My Profile</Link></li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-2">
                  <Image
                  src={user}
                  height={40}
                  width={40}
                  alt='user avator'
                  className='rounded-full'
                  />
                  <button>
                    <Link  
                    href={"/login"}
                  className="btn bg-amber-500 text-white hover:bg-amber-600">Login</Link></button>
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;