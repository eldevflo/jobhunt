import { BrowserRouter as Router, Route } from 'react-router-dom'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogsPage from './pages/BlogsPage'
import BlogDetail from './pages/BlogDetail'
import Result from './components/search/Result'
import { lazy } from 'react'
import { Suspense } from 'react'
import Loading from './components/loading/Loading';
import { useEffect } from 'react';
import JobsPage from './pages/JobPage';

const ProductPage = lazy(() => import('./pages/ProductPage.js'));
const LoginForm = lazy(() => import('./components/forms/LoginForm.js'));
const SignUpForm = lazy(() => import('./components/forms/SignUpForm.js'));
const Home = lazy(() => import('./pages/Home.js'));

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    
    <Router>
   
      <main>
      <Suspense fallback={<Loading/>}>
          <Route path="/" component={Home} exact />
          <Route path="/products" component={ProductPage} />
          <Route path="/product/:id" component={Product} />
          <Route path="/cart/:id?" component={Cart} />
          <Route path="/login" component={LoginForm} />
          <Route path="/sign-up" component={SignUpForm} />
          <Route path="/blogs" component={BlogsPage} exact />
          <Route path="/blog/:id" component={BlogDetail}/>
          <Route path="/jobs" component={JobsPage}/>
          <Route path="/results/:search" component={Result} exact />
      </Suspense>  
      </main>
      <Footer />
    </Router>
  )
}

export default App
