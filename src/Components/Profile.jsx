import React from 'react'
import Navbar from './navbar'
import Sidebar from './Sidebar'
import './Home.css'
import { CgProfile } from "react-icons/cg";

export default function Profile() {
  return (
    <div className=''>
      <div>
        <Navbar/>
      </div>
      <div className='fix'>
        <Sidebar/>
      </div>

      <div className='hidden xl:block fix2 pb-9'>
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


      <div className='xl:hidden fix3 pb-9'>
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
      </div>
  )
}
