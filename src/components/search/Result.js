import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import MainNavbar from '../navbar/MainNavbar';
import Button from '../../UI/Button';
import Loading from '../loading/Loading'
import clsx from 'clsx'


export default function Result({match }) {
    const [loading , setLoading]= useState(false);
    const [allData , setAllData] = useState([])
    const searchTerm = match.params.search;
    //change apply button text
    const [selected , setSelected] = useState()
    useEffect(()=>{
        window.scroll(0,0)
        setLoading(true)
        axios.get('http://localhost:8000/jobs')
            .then(response=> {
                    const data = response?.data;
                    setAllData(data);
                    setLoading(false);
            }).catch(err=> console.log(err));
    }, [])

    const result = allData?.filter((item)=>item?.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.time.toLowerCase().includes(searchTerm.toLowerCase()) || item.location.includes(searchTerm));  

    const onChangeHndler=(id)=>{
       const selectedItem= result.find(item => item.id == id);
       if (selectedItem){
           setSelected(selectedItem?.id)
       }
    }
    
  const classNames = (job) => {
    return clsx(
      job.time === "full time" && "border-lightgreen text-lightgreen",
      job.time === "part time" && "border-lightpurple text-lightpurple",
      job.time === "freelance" && "border-lightred text-lightred"
    );
  };
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
                                <button className={' p-1 m-3 job-time border-1 self-center capitalize  text-tiny rounded'+classNames(job)}>
                                    {job.time}</button>                 
                                </span>     
                                               
                            </span>
                                <Button onClick={()=>onChangeHndler(job.id)} 
                                text={selected == job.id  ? 'Applied' : "Apply" } />                 
                            </div>                        
                    )
                }): <p>sorry couldn't find what you looking for...</p>)
            }
            
        </div>
        </>
    )
}


