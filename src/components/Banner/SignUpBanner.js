import React from 'react'
import { Link } from 'react-router-dom';
import '../../styles/banner.css'

function SignUpBanner() {
    return (
        <div className="banner container-fluid px-0">
        <div className="image-overlay">
            <img src="/images/emma-dau-n_4iTY1KmDE-unsplash.jpg" className="relative py-0" alt="banner"/>


        </div>
        <span className="banner-text">
          <h1 className="text-white pt-4 text-base font-bold lg:text-3xl text-center lg:whitespace-nowrap">Make a Difference with Your Online Resume!</h1>
          <p className="text-white text-xs lg:text-base text-center py-2">Your resume in minutes with JobHunt resume assistant is ready!</p>
            <Link to="/sign-up">
             <button className="btn my-2 lg:my-4 outline-none border  rounded-lg  border-white sign-upbtn sm:my-2">Create An Account</button>  
            </Link>
        </span>

      

        </div>
    )
}

export default SignUpBanner;
