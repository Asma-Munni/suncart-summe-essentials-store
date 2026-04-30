"use client"

import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        
           <footer className="footer footer-horizontal footer-center bg-amber-500 text-white rounded p-10 w-11/12 mx-auto">
  <nav className="grid grid-flow-col gap-4">
    <Link href={"/About-us"} className="link link-hover">About us</Link>
    <Link href={"/Contact"} className="link link-hover">Contact</Link>
    <Link href={"/Contact"} className="link link-hover">Jobs</Link>
    <Link href={"/Contact"} className="link link-hover">Press kit</Link>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <Link href={"/"}>
        <FaTwitter 
        className='h-5 w-5'
        />
      </Link>
     <Link href={"/"}>
     <FaYoutube 
      className='h-5 w-5'
     /></Link>
     <Link href={"/"}><FaFacebook
      className='h-5 w-5'
     /></Link>
    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
        
    );
};

export default Footer;