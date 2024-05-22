import React from 'react'

export default function Net1({img,name,desc,tag}) {
  return (
    <div className='flex justify-between mt-4 shadow-sm shadow-violet-500 px-4'>
      <div className='flex'>
        <img src={img} alt="" className='w-36 h-24 rounded-full animate'/>
        <div className='flex flex-col justify-around'>
            <h1>{name}</h1>
            <p className='text-xs'>{desc}</p>
        </div>
    </div>
        <h3 className='opacity-60'>{tag}</h3>  
    </div>
  )
}
