"use server"
import React from 'react';
import DbConnect from '@/utils/DbConnect';
import StudentModel from '@/model/StudentModel';
import StudentForm from './_components/student-form';
import { StudentCalling } from './_components/student-calling';

const page = async () => {
   DbConnect();

  // Fetching students from the database
  const students = await StudentModel.find({}); 
  return (
    <div className='flex flex-1 gap-6 p-5'>
      <div className='w-4/12 flex h-auto'>
        <StudentForm />
      </div>
      <div className='w-8/12 flex'>
        <StudentCalling students={students} />
      </div>
    </div>
  );
};

export default page;
