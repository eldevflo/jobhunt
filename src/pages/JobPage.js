import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { JobListAction } from '../state/actions/JobAction'
import MainNavbar from '../components/navbar/MainNavbar'
import { Element } from 'react-scroll'

function JobsPage() {

  const dispatch = useDispatch()
  const jobList = useSelector((state) => state.jobList)
  const { loading, jobs } = jobList;
  useEffect(() => {
    dispatch(JobListAction())
  }, [dispatch])
    return (
      <Element name="jobs">
      <MainNavbar/>
         <div className="container mt-40">
         <h3 className="text-center"> Jobs</h3>
         <p className="text-center text-textgray">explore jobs, companies and organizations</p>
         <div className="divide-y divide-gray">
          {jobs.map((job) => {
            return (
             <div key={job.id} className="container flex lg:flex-row justify-between p-3 sm:flex-col cursor-pointer  z-10  "> 
                <span className="flex">
                    <imgs src={job.company} className="align-middle" alt="brand"/>
                    <span>
                    <h2 className="pl-2 align-text-middle self-center  text-base">{job.title}</h2>
                    <small className="text-textgray">{job.location}</small>
                    </span>                    
                </span>
                    <button className=' p-1.5 job-time border-1 self-center capitalize  text-tiny rounded text-lightred '>
                    {job.time}</button>                 
                </div>    
            )
          })}

        </div>
        </div>
        </Element>
            
    )
}


export default JobsPage
