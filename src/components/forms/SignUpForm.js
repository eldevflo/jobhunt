import React from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'



  export default function  SignUpForm (){

    return (
         <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-bggray">
      <div className="max-w-md w-full p-4 shadow-md bg-white rounded-lg" >
        <div>
        <Link to="/">
          <img
            className="mx-auto h-12 w-auto"
            src='/images/logo10.png'
            alt="logo"
          />

        </Link>
        
          <h2 className="mt-6 text-center text-2xl font-extrabold">Create an account</h2>
       
        </div>
        <form className="mt-8 py-6  " >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md ">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border my-4  border-current placeholder-gray  rounded-t-md focus:outline-none  focus:border-current focus:z-10 sm:text-sm"
                placeholder="userName"
     
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border my-4  border-current placeholder-gray  rounded-t-md focus:outline-none  focus:border-current focus:z-10 sm:text-sm"
                placeholder="Email address"
    
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border my-2 border-current placeholder-gray text-gray-900 rounded-t-md focus:outline-none focus:ring-current focus:border-current focus:z-10 sm:text-sm"
                placeholder="Password"
            
              />
            </div>
            
          </div>

          <div className="lg:flex lg:items-center justify-between mt-4">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4  border-current rounded self-center"
              />
              <label  className="ml-2 block text-xs text-textgray self-center">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="/" className=" text-xs  hover:text-current">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
               id="submit" 
               value="Register"
              className="group relative w-full flex justify-center my-4 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-current focus:outline-none   focus:ring-lightpurple"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 " aria-hidden="true" />
              </span>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>

   
    )
}



