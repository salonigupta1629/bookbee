"use client"
import React, { useState } from 'react'
import  BookCard from './_components/book-card'
import StudentCard from './_components/student-card'
import SummaryDetail from './_components/summary-detail';

const AssignBook =  () => {
  const [studentData,setStudentData]= useState(null);
  console.log(studentData);
  const [bookData,setBookData]= useState([]);

  return (
    <div className='flex flex-1 '>
    <div className='flex flex-col w-6/12'>
       <StudentCard setStudentData={setStudentData} />
       <BookCard setBookData={setBookData} />
      </div>
    <div className='flex flex-col w-6/12'>
<SummaryDetail studentData={studentData} bookData={bookData}  />
</div>
</div>
  )
}

export default AssignBook