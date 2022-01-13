import React, { useEffect, useState } from 'react'
import 'font-awesome/css/font-awesome.css'
import axios from 'axios';
function Category() {
  const [category , setCategory] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/categories')
      .then(response =>{
        const categories = response.data;
        setCategory(categories)
      }
        ).catch(err => console.log(err.message));
  }, []);
  const displayCategory = category.slice(0 , 8)
  return (
    <div className=" container category grid lg:grid-auto-flow-col lg:grid-cols-4   py-4 items-center lg:divide-x divide-y divide-gray" >
      {displayCategory &&
          displayCategory.map(job =>
        <div key={job.id} className="lg:grid-span-1 cursor-pointer category-item p-3">
            <i className={job.image}></i>
            <p className="pt-2">{job.title}</p>
            <small className="text-current">(open positions: {job.open})</small>  
          </div>
        )}    
    </div>
  )
}

export default Category
