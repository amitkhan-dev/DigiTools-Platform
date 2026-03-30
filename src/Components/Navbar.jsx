import React from 'react';
import shoppingIcon from '../assets/products/shopping-cart.png'
const Navbar = () => {
  return (
    
      <div className='navbar bg-base-100 shadow-sm sticky top-0 z-50 '>
        <div className="navbar  container mx-auto px-2 md:px-4">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost    lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul tabIndex="-1"className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a>Products</a></li>
              <li><a>Features</a></li>
              <li><a>Pricing</a></li>
              <li><a>Testimonials</a></li>
              <li><a>FAQ</a></li>
            </ul>
          </div>
          <a className=" text-gradient text-xl md:text-2xl font-bold">DigiTool</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 ">
              <li><a>Products</a></li>
              <li><a>Features</a></li>
              <li><a>Pricing</a></li>
              <li><a>Testimonials</a></li>
              <li><a>FAQ</a></li>
            </ul>
          </div>
          <div className="navbar-end gap-3">
            <img src={shoppingIcon} alt="Shopping cart" className="w-6 h-6 "/>
            <button className='btn hidden sm:inline-flex'>Login</button>
            <a className="btn custom-gradient text-[#ffffff] rounded-3xl mr-6">Get Started</a>
          </div>
        </div>
      </div>
  );
};

export default Navbar;