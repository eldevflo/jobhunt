import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="container-fluid bg-darkblue pb-5 mt-5">
          <div className="grid lg:grid-flow-col grid-auto-cols-4 text-white container">
            <div className="mt-4">
                <img src="/images/logo.png" alt="logo" />
                <p className="address text-textgray text-tiny mt-2 ">Collin Street West, Victor 8007, Australia.</p>
                <p className="phone text-textgray text-tiny mt-2 ">+1 246-345-0695</p>
                <span className="flex mt-4 text-textgray  text-xs ">
                <i className="fa fa-facebook-f"></i>
                <i className="fa fa-twitter mx-2"></i>
                <i className="fa fa-linkedin "></i>
                <i className="fa fa-instagram mx-2"></i>
                </span>
          </div>
          <div className="mt-4 w-60">
            <p>Frequently Asked Questions</p>
            <span className="lg:flex text-textgray  text-xs cursor-pointer justify-between ">
              <p>- privacy and security</p>
              <p>- support</p>
            </span>
            <span className="lg:flex text-textgray  text-xs cursor-pointer justify-between">
              <p>- terms of service</p>
              <p>- How It Works</p>
            </span>
            <span className="lg:flex text-textgray  text-xs cursor-pointer justify-between">
              <p>- commiunications</p> 
              <p>- For Employees  </p>
            </span>
            <p className="lg:flex text-textgray  text-xs cursor-pointer">- contact us</p>
          </div>

           <div className="mt-4 ">
            <p>Find jobs</p>
            <p className=" text-textgray  text-xs cursor-pointer">- full time jobs</p>
            <p className=" text-textgray  text-xs cursor-pointer">- part time jobs</p>
            <p className=" text-textgray  text-xs cursor-pointer">- freelance  jobs</p>

            </div>
             <div className="mt-4 ">
               <img src="/images/dw1.png" alt="app-store" className="cursor-pointer"/>
               <img src="/images/dw2.png" alt="google-palay" className="mt-2 cursor-pointer"/>
             </div>
        </div>
        </div>
        <div className="container-fluid bg-footerdark p-3">
        <p className=" text-textgray  text-xs text-center">© 2018 Jobhunt All rights reserved. Design by Creative Layers</p>

        </div>

    </footer>
  )
}

export default Footer
