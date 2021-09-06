import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTocart, removeFromCart } from '../state/actions/cartAction'
import MainNavbar from '../components/navbar/MainNavbar'
import { Link } from 'react-router-dom'
import Button from '../UI/Button'

const Cart = ({ match }) => {
  const productId = match.params.id

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addTocart(productId))
    }
    window.scrollTo(0, 0)
  }, [dispatch, productId])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  return (
    <div>
      <MainNavbar/>
      <div className="container mt-40">
      <div className="row">
        <div className="col col-md-8 ">
          <h2 className=" text-center text-3xl mb-4">Cart </h2>
          {cartItems.length === 0 ? (
            <div className="text-center">
              <p className="text-center text-3xl"> your basket is Empty :( </p>
              <Link to="/products">
              <Button text={'See our awsome packages'} />
              </Link>
            

            </div>
            
          ) : (
            <div className="list-group  " variant="flush">
              {cartItems.map((item) => (
                <div className="row"   key={item.product}>
                  <div className='list-group-item flex flex-row '>
                    <span>
                      <img src={item.image} alt={item.name} className="img-fluid rounded inline float-left" />
                    </span>
                    <div>{item.name}</div>
                    <div>price: {item.price}$</div>
                    <div className="">
                      <button                    
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <i className="fa fa-trash text-center text-lightred"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <div>
            <div variant="flush">
              <div>
                you have to pay: {cartItems.reduce((acc, item) => acc + item.price, 0)} $
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Cart
