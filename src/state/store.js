import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { blogDetailReducer, blogListReducer } from './reducers/BlogReducer'
import { cartReducer } from './reducers/CartReducer'
import { JobListReducer } from './reducers/JobReducer'
import { productDetailReducer, productListReducer } from './reducers/ProductReducer'


const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
  blogList: blogListReducer,
  blogDetail: blogDetailReducer,
  jobList: JobListReducer,
})

const cartItemsFromLocalStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const initialState = {
  cart: { cartItems: cartItemsFromLocalStorage },
}

const middleware = [thunk]

const store = createStore(reducer, initialState, applyMiddleware(...middleware))

export default store
