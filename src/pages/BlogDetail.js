import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { blogDetailAction } from '../state/actions/BlogAction';
import Loading from '../components/loading/Loading'
import MainNavbar from '../components/navbar/MainNavbar';
import '../styles/BlogDetail.css'
function BogDetail({match}) {
  
  const dispatch = useDispatch()

  const blogDetail = useSelector((state) => state.blogDetail)
  const { loading, blog } = blogDetail

  useEffect(() => {
    dispatch(blogDetailAction(match.params.id));
     window.scrollTo(0, 0)
  }, [dispatch, match])


    return (
      <>
        <MainNavbar/>
     
        <div className='container mt-40'>
      {loading ?(
          <Loading/>
      ):
        <div>
        <h1 className="text-center text-current text-3xl my-4 py-2 border-b-4">{blog.title}</h1>
          <div className="flex flex-col text-center items-center">
              <img src={blog.image} alt="blog" className="border rounded-lg object-cover h-59"/>
              <p className="mt-4 text-justify text-lg blog-content">{blog.content}</p>
          </div>
          
        </div>
      }            
        </div>
        </>
    )
}

export default BogDetail
