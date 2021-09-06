import { Suspense } from 'react';
import { lazy } from 'react'
import Header from '../components/Header/Header'
import Loading from '../components/loading/Loading';
import { scroller } from 'react-scroll'
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const Categories = lazy(() => import( '../components/Categories/Categories.js'));
  const FeaturedJobs = lazy(() => import( '../components/FeaturedJobs/FeaturedJobs.js'));
  const Blogs = lazy(() => import( '../components/Blogs/Blogs.js'));
  const SignUpBanner = lazy(() => import( '../components/Banner/SignUpBanner.js'));


  return (
    <div className="home">
      <Suspense fallback={<Loading/>}>
        <Header/> 
        <div className="scroll-sec lg:visible">
        <div className=' scroll-btn '>
          <span
          onClick={() =>
            scroller.scrollTo("jobs", {
              duration: 1500,
              smooth: "easeOutQuart",
            })}>
          <svg xmlns="http://www.w3.org/2000/svg" className=" bg-white text-current	" viewBox="0 0 20 20" fill="currentColor" width="100%">
              <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
          </span>        
        </div>
        </div>  
        <Categories />
        <SignUpBanner/>
        <FeaturedJobs/>
        <Blogs/>   
    </Suspense>
    </div>
 
  )
}

export default Home
