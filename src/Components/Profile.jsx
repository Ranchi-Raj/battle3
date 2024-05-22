import React from 'react'
// import Navbar from './navbar'
import Sidebar from './Sidebar'
import './Home.css'
import { FaLinkedinIn } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { RiInbox2Line } from "react-icons/ri";
import { BiMessageAlt } from "react-icons/bi";
import './navbar.css'
import { Link } from 'react-router-dom';
export default function Profile() {
  return (
    <div className='overflow-x-hidden'>
        <div className='text-xs my-2 shadow-lg py-2 fixed w-full'>
      <nav className='flex justify-between'>
        <div className='lg:text-2xl md:text-xl sm:text-xs'>
          <Link to='/'>
            <button className='bg-violet-500 text-white p-1 rounded-md mx-2 sm:text-xs  md:text-xl lg:text-xl'><FaLinkedinIn /></button>
          </Link>  
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
                <Link className='bg-yellow-500 h-3 sm:h-6  rounded-full  mx-2 sm:text-xs  md:text-xl lg:text-xl'><CgProfile/></Link>
            </div>
        <div>

        </div>
      </nav>
    </div>
      <div className='fix'>
        <Sidebar/>
      </div>

      <div className='hidden xl:block fix2 pb-9 ml-6 mt-6'>
        <p className='text-3xl font-bold'>Settings</p>
        <br></br>
        <p className='font-bold opacity-80 text-xl'>Profile Picture</p>
        <div className='m-9 flex'>
            <p className='text-6xl bg-yellow-400 w-16 rounded-full'><CgProfile/></p>
            <div className='ml-8 flex flex-col justify-around'>
                <div className='md bg-gray-400 rounded text-center w-2/3'>Add Profile Photo</div>
                <div className='text-xs'>Must be JPEG, PNG, or GIF and cannot exceed 10MB.</div>
            </div>
        </div>

        <p className='font-bold opacity-80 text-xl mt-12'>Profile Banner</p>
        <div className='m-9 flex'>
            <p className='text-6xl bg-gray-900 rounded w-60 h-20 '></p>
            <div className='ml-8 flex flex-col justify-around'>
                <div className='md bg-gray-400 rounded text-center w-2/3'>Add Profile Banner</div>
                <div className='text-xs'>Must be JPEG, PNG, or GIF and cannot exceed 10MB.</div>
            </div>
        </div>

        <p className='font-bold opacity-80 text-xl mt-12'>Profile Settings</p>
        <p className='text-xs mt-2'>Change identifying details for your account</p>

        <div>
            <div className='flex justify-between w-1/2 mt-12'>
                <p className='mr-12'>Name</p>
                <div className='flex flex-col justify-around'>
                    <input type='text border-2 border-violet-500'  style={{borderWidth: '2px'}}></input>
                    <p className='text-xs'>You must have a verified email to update your username</p>
                </div>
            </div>

            <div className='flex justify-between w-1/2 mt-12'>
                <p className='mr-12'>Headline</p>
                <div className='flex flex-col justify-around'>
                    <input type='text border-2 border-violet-500 '  style={{borderWidth: '2px'}}></input>
                    <p className='text-xs'>A short description on yourself</p>
                </div>
            </div>

            <div className='flex justify-between w-1/2 mt-12'>
                <p className='mr-12'>Description</p>
                <div className='flex flex-col justify-around'>
                    <input type='border-2 border-black text h-auto' style={{borderWidth: '2px'}}></input>
                    <p className='text-xs'>You must have a verified email to update your username</p>
                </div>
            </div>

            <div className='flex justify-between w-1/2 mt-12'>
                <p className='mr-12'>Skills</p>
                <div className='flex flex-col justify-around'>
                    <input type='text border-2 border-violet-500' style={{borderWidth: '2px'}}></input>
                    <p className='text-xs'>Add Relevant Skills</p>
                </div>
            </div>

            <div className='flex justify-between w-1/2 mt-12'>
                <p className='mr-12'>Experience</p>
                <div className='flex flex-col justify-around'>
                    <input type='text border-2 border-violet-500 w-full'  style={{borderWidth: '2px'}}></input>
                    <p className='text-xs'>Add only correct deails</p>
                </div>
            </div>
        </div>

      </div>

      <div className='xl:hidden fix3 pb-9 overflow-x-hidden mt-12'>
        <p className='text-2xl font-bold'>Settings</p>
        <br></br>
        <p className='font-bold opacity-80 text-md'>Profile Picture</p>
        <div className='m-9 flex'>
            <p className='text-3xl bg-yellow-400 w-16 h-8 rounded-full'><CgProfile/></p>
            <div className='ml-8 flex flex-col justify-around'>
                <div className='text-md bg-gray-400 rounded text-center w-2/3'>Add Profile Photo</div>
                <div className='text-xs'>Must be JPEG, PNG, or GIF and cannot exceed 10MB.</div>
            </div>
        </div>

        <p className='font-bold opacity-80 text-xl mt-12'>Profile Banner</p>
        <div className='m-9 flex'>
            <p className='text-6xl bg-gray-900 rounded w-60 h-20 '></p>
            <div className='ml-8 flex flex-col justify-around'>
                <div className='md bg-gray-400 rounded text-center w-2/3'>Add Profile Banner</div>
                <div className='text-xs'>Must be JPEG, PNG, or GIF and cannot exceed 10MB.</div>
            </div>
        </div>

        <p className='font-bold opacity-80 text-xl mt-12'>Profile Settings</p>
        <p className='text-xs mt-2'>Change identifying details for your account</p>

        <div>
            <div className='flex justify-between w-1/2 mt-12'>
                <p className='mr-12'>Name</p>
                <div className='flex flex-col justify-around'>
                    <input type='text border-2 border-violet-500'  style={{borderWidth: '2px'}}></input>
                    <p className='text-xs'>You must have a verified email to update your username</p>
                </div>
            </div>

            <div className='flex justify-between w-1/2 mt-12'>
                <p className='mr-12'>Headline</p>
                <div className='flex flex-col justify-around'>
                    <input type='text border-2 border-violet-500 '  style={{borderWidth: '2px'}}></input>
                    <p className='text-xs'>A short description on yourself</p>
                </div>
            </div>

            <div className='flex justify-between w-1/2 mt-12'>
                <p className='mr-12'>Description</p>
                <div className='flex flex-col justify-around'>
                    <input type='border-2 border-black text h-auto' style={{borderWidth: '2px'}}></input>
                    <p className='text-xs'>You must have a verified email to update your username</p>
                </div>
            </div>

            <div className='flex justify-between w-1/2 mt-12'>
                <p className='mr-12'>Skills</p>
                <div className='flex flex-col justify-around'>
                    <input type='text border-2 border-violet-500' style={{borderWidth: '2px'}}></input>
                    <p className='text-xs'>Add Relevant Skills</p>
                </div>
            </div>

            <div className='flex justify-between w-1/3 mt-12'>
                <p className='mr-12'>Experience</p>
                <div className='flex flex-col justify-around'>
                    <input type='text border-2 border-violet-500 w-full'  style={{borderWidth: '2px'}}></input>
                    <p className='text-xs'>Add only correct deails</p>
                </div>
            </div>
        </div>

      </div>
      </div>
  )
}
