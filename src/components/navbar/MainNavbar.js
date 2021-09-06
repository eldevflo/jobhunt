import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function MainNavbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <div className="nav-container fixed  top-0 z-50 w-full">
        <nav className= "relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 bg-white shadow-sm">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to="/"><img src="/images/logo10.png"  alt="logo" className="logo my-3 mx-0"/></Link>
         
          <button
            className="text-black text-3xl  cursor-pointer  leading-none   bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}>
            <i className="fa fa-bars"></i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex " : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto   ">
            <li className="nav-item">
             <Link to="/blogs" className="text-dark mx-1 px-3 py-2 flex items-center text-xs uppercase no-underline	font-bold leading-snug  hover:opacity-75">
                blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/jobs" className="text-dark mx-1 px-3 py-2 flex items-center text-xs uppercase font-bold no-underline	  hover:opacity-75">
                jobs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="text-dark mx-1 px-3 py-2 flex items-center text-xs uppercase no-underline	font-bold leading-snug e border-2  rounded-full border-current hover:bg-current ">
                + packages
              </Link>
            </li>
             <li className="nav-item">
              <Link to="/cart" className="text-dark mx-1 px-3 py-2 flex items-center text-xs uppercase no-underline	font-bold leading-snug hover:opacity-75">
              <i className="fa fa-shopping-cart  mx-1"></i>
                cart
              </Link>
            </li>
             <li className="nav-item">
              <Link to="/sign-up" className= "text-dark mx-1 px-3 py-2 flex items-center text-xs uppercase no-underline	font-bold leading-snug hover:opacity-75" >
              <i className="fa fa-user-plus mx-1"></i>
                signup
              </Link>
            </li>
             <li className="nav-item ">
              <Link to="/login" className="text-dark mx-1 px-3 py-2 flex items-center text-xs uppercase no-underline	font-bold leading-snug  hover:opacity-75">
               <i className="fa fa-sign-in mx-1"></i>
                login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  </div>

    )
}

export default MainNavbar
