import React from 'react'
import { HiLogout } from "react-icons/hi";
import Img from '../Assets/new.jpg'
import { GoDotFill } from "react-icons/go";

export default function Sidebar() {

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
//   {
//     name: "Ivy Taylor",
//     company: "Netflix",
//     randomNumber: generateRandomNumber(),
//     description: "Content creator and film analyst."
//   },
//   {
//     name: "Jack Anderson",
//     company: "Google",
//     randomNumber: generateRandomNumber(),
//     description: "Search engine optimization expert."
//   },
//   {
//     name: "Kate Thomas",
//     company: "Facebook",
//     randomNumber: generateRandomNumber(),
//     description: "Marketing strategist and social media guru."
//   },
//   {
//     name: "Liam Martin",
//     company: "Amazon",
//     randomNumber: generateRandomNumber(),
//     description: "Logistics expert and operations manager."
//   },
//   {
//     name: "Mia White",
//     company: "Apple",
//     randomNumber: generateRandomNumber(),
//     description: "Product manager for mobile devices."
//   },
//   {
//     name: "Noah Harris",
//     company: "Netflix",
//     randomNumber: generateRandomNumber(),
//     description: "Streaming technology innovator."
//   },
//   {
//     name: "Olivia Clark",
//     company: "Google",
//     randomNumber: generateRandomNumber(),
//     description: "AI researcher and developer."
//   }
];
  return (
    <div>
        <div className='hidden xl:block  bg-slate-200'>
      <div className='flex justify-between w-64 sm:text-xs  md:text-xl py-2'>
        <p>For You</p>
        <p>< HiLogout /></p>
      </div>

      <div className='my-1'>Recommended Posts</div>
      { data.map((d) => {
       return ( 
       <div className='flex justify-between'>
        <div className='flex my-2 md:text-sm'>
            <img src = {Img} alt='dp' className='w-10 rounded-full mr-2'></img>
            <div>
                <p>{d.name}</p>
                <p className='opacity-50'>{d.company}</p>
            </div>
         </div> 
        <div className='md:text-sm'><GoDotFill className='text-red-500 inline'/>{d.randomNumber}</div>      
        </div>)
      })}
      </div>

      <div className='xl:hidden bg-slate-200 px-2 p-2'>
        {
            data.map((d) =>{
                return(
                    <img src={Img} alt='dp' className='w-10 rounded-full my-2'></img>
                )
            })
        }
      </div>
    </div>
  )
}
