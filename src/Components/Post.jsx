import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import './Home.css'

export default function Post({img,name,tag}) {
  return (
    <div className='mx-8'>
      <div className='hover-cont'><img src={img} alt="" className='w-36 h-36 animate'/>
        <h1>{name}</h1>
        <h3 className='opacity-60'>{tag}</h3>
      </div>
      <div className='flex justify-between'>
        <button className='text-xl  bg-violet-500 text-white'><CiHeart/></button>
        <button><FaRegCommentAlt/></button>
        <button><IoShareSocialOutline/></button>
      </div>
    </div>
  )
}
