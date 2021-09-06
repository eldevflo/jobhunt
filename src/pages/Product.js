import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productDetailAction } from '../state/actions/productAction'
import Loading from '../components/loading/Loading'
import MainNavbar from '../components/navbar/MainNavbar'

const Product = ({ history, match }) => {
  const dispatch = useDispatch()
  const productDetail = useSelector((state) => state.productDetail)
  const { loading, product } = productDetail

  useEffect(() => {
    dispatch(productDetailAction(match.params.id));
    window.scrollTo(0, 0)
  }, [dispatch, match])

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}`)
  }

  return (
    <>
    <MainNavbar/>
    <div className="container mt-40">
      {loading ? (
        <Loading/>
      ) : (
        <div className="flex flex-col justify-center p-4 items-center text-center border rounded">
          <div>
            <img src={product.image} className="w-full" />
          </div>
          <div>
            <div variant="flush">
              <div>
                <h3 className="text-lg font-bold">{product.name}</h3>
              </div>
              <div>
              <p className="text-secondarpurple font-bold">price: </p>
              <p className="text-lightred font-bold">
               {product.price} $
              </p>
             </div>
              <div>{product.description}</div>
            </div>
          </div>
          <div md={3}>
            <div variant="flush">
              <div>
                <button
                  onClick={addToCartHandler}
                  className="border rounded w-full bg-lightred hover:bg-current p-1 text-base"
                  type="button"
                >
                add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default Product
