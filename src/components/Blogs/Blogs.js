import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Loading from '../loading/Loading'
import {blogListAction} from '../../state/actions/BlogAction'



function Blogs() {
  const dispatch = useDispatch()
  const blogList = useSelector((state) => state.blogList)
  const { loading, blogs } = blogList;
  useEffect(() => {
    dispatch(blogListAction())
  }, [dispatch])
  const homeBloges = blogs.slice(0,3)
    return (
      <>   
        <div className="container  mt-18">
        <h1 className="mt-4 text-center capitalize text-3xl  pb-2">career advice</h1>
          {loading ? (
            <Loading/>
          ) : (
        <div className="container grid  lg:grid-cols-3 gap-2 sm:grid-flow-row md:grid-cols-2">
          {homeBloges.map((item) => {
            return (
             <div className="flex flex-wrap sm:-m-4 mt-4  " key={item.id}>
                    <div className="p-4  md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm ">
                     <div className=" bg-gray h-56 w-full rounded-lg shadow-md bg-cover bg-center " style={{backgroundImage: `url(${item?.image})`}}>
                        </div>
                        <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden px-5 py-2">
                        
                            <div className="header-content inline-flex ">
                             
                                <div className=" flex-1 text-lightred font-bold">{item?.title}</div>
                            </div>
                            <div className="summary-post text-xs text-justify pt-4">
                            <p>{item?.body} </p>
                              
                            <Link to={`/blog/${item.id}`}>     
                                <button 
                                className=" p-1 border-1 text-current block rounded-full self-center mt-2 text-tiny font-bold  border-current hover:text-lightred focus:outline-none"> see more</button>
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


export default Blogs
