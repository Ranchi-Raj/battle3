import React from 'react'
// import Navbar from './navbar';
import Sidebar from './Sidebar';
import Job2 from './Job2';
import Job1 from './Job1';
import { FaLinkedinIn } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { RiInbox2Line } from "react-icons/ri";
import { BiMessageAlt } from "react-icons/bi";
import './navbar.css'
import { Link } from 'react-router-dom';

export default function Jobs() {

  const jobs = [
    {
      logo: "https://via.placeholder.com/150?text=Logo1",
      company: "Company One",
      title: "Software Engineer"
    },
    {
      logo: "https://via.placeholder.com/150?text=Logo2",
      company: "Company Two",
      title: "Data Scientist"
    },
    {
      logo: "https://via.placeholder.com/150?text=Logo3",
      company: "Company Three",
      title: "Product Manager"
    },
    {
      logo: "https://via.placeholder.com/150?text=Logo4",
      company: "Company Four",
      title: "UX Designer"
    },
    {
      logo: "https://via.placeholder.com/150?text=Logo5",
      company: "Company Five",
      title: "Marketing Specialist"
    },
    {
      logo: "https://via.placeholder.com/150?text=Logo6",
      company: "Company Six",
      title: "Sales Manager"
    },
    {
      logo: "https://via.placeholder.com/150?text=Logo7",
      company: "Company Seven",
      title: "Business Analyst"
    },
    {
      logo: "https://via.placeholder.com/150?text=Logo8",
      company: "Company Eight",
      title: "Graphic Designer"
    },
    {
      logo: "https://via.placeholder.com/150?text=Logo9",
      company: "Company Nine",
      title: "Financial Analyst"
    },
    {
      logo: "https://via.placeholder.com/150?text=Logo10",
      company: "Company Ten",
      title: "Human Resources Manager"
    },
    {
      logo: "https://via.placeholder.com/150?text=Logo11",
      company: "Company Eleven",
      title: "Operations Manager"
    },
    {
      logo: "https://via.placeholder.com/150?text=Logo12",
      company: "Company Twelve",
      title: "Network Engineer"
    },
    {
      logo: "https://via.placeholder.com/150?text=Logo13",
      company: "Company Thirteen",
      title: "Content Writer"
    },
    {
      logo: "https://via.placeholder.com/150?text=Logo14",
      company: "Company Fourteen",
      title: "Customer Support Specialist"
    },
    {
      logo: "https://via.placeholder.com/150?text=Logo15",
      company: "Company Fifteen",
      title: "SEO Specialist"
    }
  ];
  
  const handle = () =>{
    
  }

  return (
    <div><div className='text-xs my-2 py-2 fixed w-full'>
    <nav className='flex justify-between '>
      <div className='lg:text-2xl md:text-xl sm:text-xs'> 
        <Link to='/'>
          <button onClick={handle} className='bg-violet-500 text-white p-1 rounded-md mx-2 sm:text-xs  md:text-xl lg:text-xl'><FaLinkedinIn /></button>
          </Link>
          <Link to='/network' className='mx-1 sm:text-xs  md:text-xl lg:text-xl hover:text-violet-800'>Network</Link>
          <Link to='/job' className='mx-2  sm:text-xs  md:text-xl lg:text-xl text-violet-700 border-b-2 border-violet-700 hover:text-violet-800'>Jobs</Link>
      </div>
      <div className='flex lg:text-2xl md:text-xl sm:text-xs'>
          <input type="text" placeholder='Search' className='relative bottom-2 sm:text-xs h-9 p-1 rounded focus:outline-violet-500 w-12 lg:text-xl md:w-36 xl:w-60'/>
          <button className='sm:text-xs relative bottom-2 md:text-xl lg:text-2xl'><IoSearch/></button>
      </div>
          <div className='flex sm:text-xs md:text-2xl lg:text-2xl '>
            <div className='hover-cont'>
              <button className=' mx-2 sm:text-xs  md:text-xl lg:text-2xl  hover:bg-gray-300 rounded'><RiInbox2Line/></button>
              <span className='hover-text'>Notifications</span>
            </div>
            <div className='hover-cont'>
              <button className='mx-1 sm:text-xs md:text-2xl lg:text-2xl hover:bg-gray-300 rounded'><BiMessageAlt/></button>
              <span className='hover-text'>Messages</span>
            </div>
              <button className='sm:text-xs md:text-xl lg:text-xl mx-2 hidden sm:visible xl:block hover:text-violet-800'>Get Premium</button>
              <Link to='/profile' className='bg-yellow-500 h-3 sm:h-6  rounded-full  mx-2 sm:text-xs  md:text-xl lg:text-2xl'><CgProfile/></Link>
          </div>
      <div>

      </div>
    </nav>
  </div>
      <div className='fix'>
        <Sidebar/>
      </div>
      
      <div className='hidden xl:block fix2'>
      <div className='text-5xl text-center mb-4'>JOBS</div>

        {jobs.map((i) => {
          return(
            <Job1 img={i.logo} name={i.company} desc={i.title}/>
          )
        })}
      </div>


      <div className='xl:hidden fix3'>
      <div className='text-3xl text-center my-4'>JOBS</div>

      {jobs.map((i) => {
          return(
            <Job2 img={i.logo} name={i.company} desc={i.title}/>
          )
        })}
      </div>

    </div>
  )
}
