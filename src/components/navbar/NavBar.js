import React, { useEffect, useState } from 'react'
import '../../styles/Navbar.css';
import { Link } from 'react-router-dom'

function NavBar({fixed}) {
     //navbar scroll when active state
  const [scroll, setScroll] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  //if its in another component
   
  
   useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);

  })

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

 

    return (
      <div className="nav-container fixed  top-0 z-50 w-full">
          <nav className={scroll ? "text-dark relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 bg-white shadow-md  ": "relative flex flex-wrap items-center justify-between px-2 py-3  mb-3" }>
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link to="/">
                {scroll? 
               <img src="/images/logo10.png"  alt="logo" className="logo my-3 mx-0"/> :
               <img src="/images/logo.png"  alt="logo" className="logo my-3 mx-0"/>
            
            }
           </Link>
           
            <button
              className={scroll ? "text-dark text-3xl  cursor-pointer  leading-none   bg-transparent block lg:hidden outline-none focus:outline-none":"text-white text-3xl  cursor-pointer  leading-none   bg-transparent block lg:hidden outline-none focus:outline-none"}
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fa fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex bg-current rounded " : " hidden")
            }
            style={{height: navbarOpen ? '100vh' : ''}}
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto   ">
              <li className="nav-item">
               <Link to="/blogs" className={scroll ? "text-dark mx-1 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75" : "text-white  mx-1 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"}>
                  blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/jobs" className={scroll ? "text-dark mx-1 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75" : "text-white mx-1 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"}>
                  jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className={scroll ? "text-dark mx-1 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug border-2  rounded-full border-current hover:bg-current " : "text-white mx-1 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white border-2  rounded-full border-current bg-current  hover:bg-opacity-0  "}>
                 + packages
                </Link>
              </li>
               <li className="nav-item">
                <Link to="/cart" className={scroll ? "text-dark mx-1 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75" : "text-white mx-1 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"}>
                <i className="fa fa-shopping-cart  mx-1"></i>
                  cart
                </Link>
              </li>
               <li className="nav-item">
                <Link to="/sign-up" className={scroll ? "text-dark mx-1 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75" : "text-white mx-1 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"}>
                <i className="fa fa-user-plus mx-1"></i>
                  signup
                </Link>
              </li>
               <li className="nav-item ">
                <Link to="/login" className={scroll ? "text-dark mx-1 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75" : "text-white mx-1 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"}>
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

export default NavBar