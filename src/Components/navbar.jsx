import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { RiInbox2Line } from "react-icons/ri";
import { BiMessageAlt } from "react-icons/bi";
import './navbar.css'
import { Link } from 'react-router-dom';

export default function navbar() {
  return (
    <div className='text-xs my-2 shadow-lg py-2'>
      <nav className='flex justify-between'>
        <div className='lg:text-2xl md:text-xl sm:text-xs'>
            <button className='bg-violet-500 text-white p-1 rounded-md mx-2 sm:text-xs  md:text-xl lg:text-xl'><FaLinkedinIn /></button>
            <Link to='/network' className='mx-1 sm:text-xs  md:text-xl lg:text-xl hover:text-violet-800'>Network</Link>
            <Link to='/job' className='mx-2  sm:text-xs  md:text-xl lg:text-xl hover:text-violet-800'>Jobs</Link>
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
  )
}
