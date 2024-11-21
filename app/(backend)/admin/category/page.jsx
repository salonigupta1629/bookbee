import React from 'react'
import CategoryForm from './_components/category-form'
import CategoryCalling from './_components/category-calling'

const page = () => {
  return (
    <div className='flex flex-1 gap-6 p-7 '>
      <div className='w-4/12 flex flex-1 '>
      <CategoryForm/>
      </div>
      <div className='w-8/12 flex'>
      <CategoryCalling/>
      </div>
    </div>
  )
}

export default page