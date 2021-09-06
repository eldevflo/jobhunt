import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/loading/Loading'
import { productListAction } from '../state/actions/productAction'
import { Link } from 'react-router-dom'
import MainNavbar from '../components/navbar/MainNavbar'

const ProductPage = ({  match }) => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, products } = productList

  useEffect(() => {
    dispatch(productListAction());
    window.scrollTo(0, 0)
  }, [dispatch, match])

  return (
    <>

    <MainNavbar/>
    
    <div className="mt-40 container">

      <h1 className="mt-4 text-center text-uppercase text-3xl  pb-2">packages</h1>
      {loading ? (
        <Loading/>
      ) : (
        <div className="grid grid-flow-col lg:grid-cols-3 gap-2 justify-center items-center sm:grid-flow-row ">
          {products.map((product) => {
            return (
              <div key={product._id} >
                    <div className="my-3 p-3 rounded border-1 border-bggray">
                      <Link to={`/product/${product.id}`} className="no-underline	">
                        <img src={product.image} variant="top" />

                      <div>
                          <div as="div" className="text-center text-current font-bold text-lg">{product.name}</div>
                        <p className="text-dark">{product.description}</p>
                      </div>
                   
                      <button className=" text-dark w-100 bg-lightpurple rounded-full hover:bg-secondarpurple text-lg">{product.price}$</button>                         
                      </Link>
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

export default ProductPage
