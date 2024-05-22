import React from 'react'

export default function Job2({img,name,desc}) {
  return (
    <div>
      <div className='flex py-2 shadow-sm shadow-violet-700 my-2 justify-between'>
        <div className='flex'>
        <img src={img} alt="" className='w-24 h-24 rounded-full animate mx-4'/>
        <div className='flex flex-col justify-around '>
            <h1>{name}</h1>
            <p className='text-xs'>{desc}</p>
        </div>
        </div>
        <div className='flex flex-col justify-around'>
        <button>Save</button>
        <button>Apply</button>
        </div>
      </div>

      <div>
        
      </div>
    </div>
  )
}
