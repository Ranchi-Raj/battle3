import React from 'react'
import Img from '../Assets/logo.jpg'
// import Navbar from './navbar';
import Sidebar from './Sidebar';
import Net1 from './Net1';
import './Home.css'
import Net2 from './Net2';
import { FaLinkedinIn } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { RiInbox2Line } from "react-icons/ri";
import { BiMessageAlt } from "react-icons/bi";
import './navbar.css'
import { Link } from 'react-router-dom';

export default function Network() {

    const generateRandomNumber = () => Math.floor(Math.random() * 100);

    const data = [
        {
          name: "Alice Johnson",
          company: "Facebook",
          randomNumber: generateRandomNumber(),
          description: "Software engineer with a passion for AI."
        },
        {
          name: "Bob Smith",
          company: "Amazon",
          randomNumber: generateRandomNumber(),
          description: "Expert in cloud solutions and AWS."
        },
        {
          name: "Carol Williams",
          company: "Apple",
          randomNumber: generateRandomNumber(),
          description: "Designer focusing on user experience."
        },
        {
          name: "David Brown",
          company: "Netflix",
          randomNumber: generateRandomNumber(),
          description: "Content strategist and media expert."
        },
        {
          name: "Eve Davis",
          company: "Google",
          randomNumber: generateRandomNumber(),
          description: "Data scientist specializing in big data."
         },
        {
          name: "Frank Miller",
          company: "Facebook",
          randomNumber: generateRandomNumber(),
          description: "Developer with a love for social media."
        },
        {
          name: "Grace Wilson",
          company: "Amazon",
          randomNumber: generateRandomNumber(),
          description: "E-commerce specialist and marketer."
        },
        {
          name: "Hank Moore",
          company: "Apple",
          randomNumber: generateRandomNumber(),
          description: "Hardware engineer and tech enthusiast."
        },
        {
          name: "Ivy Taylor",
          company: "Netflix",
          randomNumber: generateRandomNumber(),
          description: "Content creator and film analyst."
        },
        {
          name: "Jack Anderson",
          company: "Google",
          randomNumber: generateRandomNumber(),
          description: "Search engine optimization expert."
        },
        {
          name: "Kate Thomas",
          company: "Facebook",
          randomNumber: generateRandomNumber(),
          description: "Marketing strategist and social media guru."
        },
        {
          name: "Liam Martin",
          company: "Amazon",
          randomNumber: generateRandomNumber(),
          description: "Logistics expert and operations manager."
        },
        {
          name: "Mia White",
          company: "Apple",
          randomNumber: generateRandomNumber(),
          description: "Product manager for mobile devices."
        },
        {
          name: "Noah Harris",
          company: "Netflix",
          randomNumber: generateRandomNumber(),
          description: "Streaming technology innovator."
        },
        {
          name: "Olivia Clark",
          company: "Google",
          randomNumber: generateRandomNumber(),
          description: "AI researcher and developer."
        }
    ];

  return (
    <div>
       <div className='text-xs my-2 shadow-lg py-2'>
      <nav className='flex justify-between'>
        <div className='lg:text-2xl md:text-xl sm:text-xs'>
          <Link to='/'>
            <button className='bg-violet-500 text-white p-1 rounded-md mx-2 sm:text-xs  md:text-xl lg:text-xl'><FaLinkedinIn /></button>
          </Link>  
            <Link to='/network' className='mx-1 sm:text-xs  md:text-xl lg:text-xl text-violet-800 border-b-2 border-violet-500 hover:text-violet-800'>Network</Link>
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
                <Link className=' rounded-full  mx-2 sm:text-xs  md:text-xl lg:text-2xl'><CgProfile/></Link>
            </div>
        <div>

        </div>
      </nav>
    </div>
      <div className='fix'>
        <Sidebar/>
      </div>

      <div className='hidden xl:block fix2'>
      <div className='text-5xl text-center my-4'>NETWORK</div>

        {data.map((i) =>{
            return(
                <div>
                    <Net1 img={Img} name={i.name} desc={i.description} tag={i.company}/>
                </div>
            )
        })}
      </div>
      
      <div className='xl:hidden fix3 text-xs'>
      <div className='text-3xl text-center my-4'>NETWORK</div>

      {data.map((i) =>{
            return(
                <div>
                    <Net2 img={Img} name={i.name} desc={i.description} tag={i.company}/>
                </div>
            )
        })}
      </div>
    </div>
  )
}
