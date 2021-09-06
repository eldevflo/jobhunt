import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Loading from '../components/loading/Loading'
import MainNavbar from '../components/navbar/MainNavbar'
import {blogListAction} from '../state/actions/BlogAction'



function BlogsPage() {
    const dispatch = useDispatch()

  const blogList = useSelector((state) => state.blogList)

  const { loading, blogs } = blogList;


  useEffect(() => {
    dispatch(blogListAction())
  }, [dispatch])



    return (
      <>
      <MainNavbar/>
     
        <div className="container  pt-40">
          
        <h1 className="mt-4 text-center text-uppercase text-3xl  pb-2">blogs</h1>

          {loading ? (
            <Loading/>
          ) : (
        <div className="container grid  lg:grid-cols-3 gap-2 sm:grid-flow-row md:grid-cols-2">
          {blogs.map((item) => {
            return (
             <div className="flex flex-wrap sm:-m-4 mt-4  " key={item.id}>
                    <div className="p-4  md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm ">
                     <div className=" bg-gray h-56 w-full rounded-lg shadow-md bg-cover bg-center " style={{backgroundImage: `url(${item?.image})`}}>
                        </div>
                       

                        <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden px-5 py-2">
                        
                            <div className="header-content inline-flex ">
                             
                                <div className=" flex-1 text-lightred font-bold">{item?.title}</div>
                            </div>
                            <div className="summary-post text-xs text-justify pt-4"> {item?.body} 
                            <Link to={`/blog/${item.id}`}>     
                                <button className=" text-current block rounded-full self-center mt-2 text-tiny font-bold  border-current hover:text-lightred focus:outline-none">
                              see more</button>
                            </Link>
                        </div>
                        
                        </div>
                        
                    </div>
                </div>  
            )
          })}
        </div>
      )}
    </div>
    </>
            
    )
}


export default BlogsPage
