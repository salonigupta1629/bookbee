import React from 'react'
import Searchbar from '../../components/searchbar'

const Card = ({title,subtitle1,subtitle2,subtitle3,subtitle4}) => {
  return (
    <div className='flex flex-col w-[700px] mt-20 p-6  h-72 ml-5 border-black border-2'>
<div className='flex flex-1 justify-between items-center '>
<p className='font-bold text-lg mb-3'>Select {title}</p>
<p><Searchbar placeholder="Enter the Id"/></p>
    </div>
    <div className='flex flex-col gap-8'>
    <div className='flex flex-1 justify-between items-center'>
    <p>{subtitle1}</p>
    <p>{subtitle2}</p>
    </div>
    <div className='flex flex-1 justify-between items-center'>
<p>{subtitle3}</p>
<p>{subtitle4}</p>
    </div>
    <button className='px-4 py-2 rounded-lg bg-teal-400 self-end'>Select</button>
    </div>
    </div>
  )
}

export default Card