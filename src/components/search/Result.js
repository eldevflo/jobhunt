import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import MainNavbar from '../navbar/MainNavbar';
import Button from '../../UI/Button';
import Loading from '../loading/Loading'


export default function Result({match }) {
    const [loading , setLoading]= useState(false);
    const [allData , setAllData] = useState([])
    const searchTerm = match.params.search;
    //change apply button text
    const [apply , setApply] = useState(['apply'])
    const [selected , setSelected] = useState()
    useEffect(()=>{
        window.scroll(0,0)
        setLoading(true)
        axios.get('http://localhost:8000/jobs')
                .then(response=> {
                    const data = response?.data;
                    setAllData(data);
                    setLoading(false)
                    ;}).catch(err=> console.log(err));
    }, [])

    const result = allData?.filter((item)=>item?.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.time.toLowerCase().includes(searchTerm.toLowerCase()) || item.location.toLowerCase().includes(searchTerm.toLower));   
    const onChangeHndler=(id)=>{
       const selectedItem= result.find(item => item.id == id);
       if (selectedItem){
           setApply('applied')
       }
    }

    return (
        <>
        <MainNavbar/>
        <div className="container mt-40 divide-y divide-gray">
        <h1 className="text-center text-3xl mb-4"> results for: <em className="text-lightred"> {searchTerm}</em></h1>

            {
             loading ?( <Loading/>):(           
            result?.length > 0 ?               
                result?.map((job)=>{
                    return (
                        <div key={job.id} className="container flex lg:flex-row justify-between p-3 sm:flex-col cursor-pointer  z-10 "> 
                            <span className="flex">
                                <imgs src={job.company} className="align-middle" alt="brand"/>
                                <span>
                                <h2 className="pl-2 align-text-middle self-center  text-base">{job.title}</h2>
                                <small className="text-textgray">{job.location}</small>
                                </span>                    
                            </span>
                                <Button text={apply} />                 
                            </div>                        
                    )
                }): <p>sorry couldn't find what you looking for...</p>)
            }
            
        </div>
        </>
    )
}


