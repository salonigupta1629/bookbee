import React from 'react'

const StaticCard = ({title,subtitle}) => {
  return (
    <div className='w-52 h-24 rounded-lg bg-gray-300 text-black  justify-between items-center'>
<p className='font-semibold pl-10 mb-3 mt-3'>{title}</p>
<p className='font-extrabold text-xl pl-12'>{subtitle}</p>
    </div>
  )
}

export default StaticCard