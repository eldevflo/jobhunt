import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/SearchBar.css'

function SearchBar({history}) {
    
    const cities= [
        {value:'tehran' , label:'tehran'},
        {value:'Esfehan' , label:'Esfehan'},
        {value:'Qom' , label:'Qom'},
        {value:'Mashhad' , label:'Mashhad'},
        {value:'Shiraz' , label:'Shiraz'},
         ]

         const [searchTerm , setSearchTerm] = useState('');
                         


          const handleSearch = (e) =>{
              e.preventDefault();

            history.push(`/results${searchTerm}`);
          }
    return (
        <div  className=" container search-sec">
            <h1 className="text-center text-white font-bold lg:text-3xl ">The Easiest Way to Get Your New Job</h1>
            <p  className="text-center text-white">Find Jobs, Employment & Career Opportunities</p>
            <form >
                    <div className='form-group grid lg:grid-flow-col text-center gap-4 justify-center  justify-items-center px-2 py-3'>           
                            <input 
                            onChange={e=>setSearchTerm(e.target.value)}                                                                              
                            id="search-input"
                            type="text" 
                            className="form-control job-field lg:col-span-9 h-12 px-3 outline-none" 
                            placeholder="job title, keywords or company name"
                            />
                            <select  className='city-field lg:col-span-3  h-12  '>
                            { cities?.map((c) => <option key={c.value} value={c.value}>{c.label}</option>)}
                            </select>
                            <Link to={'results' + "/" + searchTerm} >  
                            <button
                                className="btn search-btn border-0 lg:col-span-3">
                                <i className="fa fa-search mx-1"></i>
                            </button> 
                            </Link>
                    </div>
            </form>
            <div>
               
            </div>
            
           
        </div>
    )
}

export default SearchBar