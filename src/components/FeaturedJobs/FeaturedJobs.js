import clsx from 'clsx'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Element } from 'react-scroll'
import {JobListAction} from '../../state/actions/JobAction'
import '../../styles/Header.css'
import Button from '../../UI/Button'

function FeaturedJobs() {

  const dispatch = useDispatch()
  const jobList = useSelector((state) => state.jobList)
  const { loading, jobs } = jobList;
  useEffect(() => {
    dispatch(JobListAction())
  }, [dispatch])

  const jobItems = jobs.slice(0,5);

  const classNames = (job) => {
    return clsx(
      job.time === "full time" && "border-lightgreen text-lightgreen",
      job.time === "part time" && "border-lightpurple text-lightpurple",
      job.time === "freelance" && "border-lightred text-lightred"
    );
  };



    return (
      <Element name="jobs">
         <div className="container mt-20">
         <h3 className="text-center"> Featured Jobs</h3>
         <p className="text-center text-textgray">explore jobs, companies and organizations</p>
         <div className="divide-y divide-gray">
          {jobItems.map((job) => {
            return (
             <div key={job.id} className="container flex lg:flex-row justify-between p-3 sm:flex-col cursor-pointer  z-10  "> 
                <span className="flex">
                    <imgs src={job.company} className="align-middle" alt="brand"/>
                    <span>
                    <h2 className="pl-2 align-text-middle self-center  text-base">{job.title}</h2>
                    <small className="text-textgray">{job.location}</small>
                    </span>                    
                </span>
                    <button className={' p-1.5 job-time border-1 self-center capitalize  text-tiny rounded'+classNames(job)}>
                    {job.time}</button>                 
                </div>    
            )
          })}

        </div>
        <Link to="/jobs" className="text-center"> 
        <Button text={'Explore more jobs'} />
        </Link>
        </div>
        </Element>
            
    )
}


export default FeaturedJobs
