import '../../styles/Categories.css'
import Category from './Category'
import Button from '../../UI/Button'
import {Link} from 'react-router-dom'
import '../../styles/Categories.css'

function Categories() {
    return (
        <div className=" container  px-2 categories ">
            
        <h3 className="text-center text-2xl cat-title">Popular Categories</h3>
        <small className="text-center text-textgray ">37 jobs live - 0 added today.</small>
        <Category />
        <Link to="/">
         <Button text={'Brows categories'} /> 
        </Link>
                
        </div>
    )
}

export default Categories
