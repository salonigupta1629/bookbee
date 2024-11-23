import React from 'react'
import { Sidebar } from './(frontend)/components/components/sidebar'
import Graph from './(frontend)/components/components/graph'
import StaticCard from './(frontend)/components/components/static-card'

const page = () => {
  return (
    <div className='flex flex-1  '>
      <div className='w-1/6'>
        <Sidebar/>
      </div>
      <div className='w-5/6 flex flex-col mt-2 pl-5 mb-32'>
      <div className='flex flex-1 gap-7 justify-evenly mt-3 mb-5'>
   <StaticCard title="Total Books" subtitle="+1523"/> 
    <StaticCard title="Available Books" subtitle="+951"/> 
    <StaticCard title="Active Users" subtitle="+600"/> 
    <StaticCard title="Borrowed Books" subtitle="+775"/> 
    <StaticCard title="Overdues Books" subtitle="+75"/> 
      </div>
        <Graph/>
      </div>
    </div>
  )
}

export default page