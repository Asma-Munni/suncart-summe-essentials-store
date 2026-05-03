"use client";

import React from "react";
import logo from "@/assets/summerLogo.png";
import avatar from "@/assets/avator.png";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { createAuthClient } from "better-auth/react";

const Navbar = () => {
   
  const { data: session, isPending } = authClient.useSession();
  const currentUser = session?.user;

  console.log(currentUser, isPending, "user");

  return (
    <div>
      <div className="navbar bg-base-100 border-b border-b-amber-100 w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  className="text-amber-600 hover:bg-amber-500 hover:text-white"
                  href="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="hover:bg-amber-500 hover:text-white"
                  href="/products"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="hover:bg-amber-500 hover:text-white"
                  href="/my-profile"
                >
                  My Profile
                </NavLink>
              </li>
            </ul>
          </div>

          <Image src={logo} height={100} width={100} alt="logo" />
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="flex justify-between items-center gap-4 text-gray-700">
            <li>
              <NavLink className="text-amber-600" href="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink href="/products">Products</NavLink>
            </li>
            <li>
              <NavLink href="/my-profile">My Profile</NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end flex gap-2 items-center">
          {isPending ? (
            <span className="loading loading-ring loading-md"></span>
          ) : currentUser ? (
            <>
              <h2>Hello, {currentUser.name}</h2>

              <Image
                src={currentUser?.image || avatar}
                height={40}
                width={40}
                alt="user Avatar"
                className="rounded-full"
              />

              <button className="btn bg-amber-500 text-white hover:bg-amber-600" onClick={async()=>await authClient.signOut()}>
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="btn bg-amber-500 text-white hover:bg-amber-600"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;