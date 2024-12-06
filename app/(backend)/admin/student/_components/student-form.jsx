
"use client"
import { handleInsertStudent } from '@/utils/action';
import DbConnect from '@/utils/DbConnect';
import { Button, Input, Typography } from '@material-tailwind/react'
import  { useState } from 'react'

const StudentForm = () => {
  DbConnect();
    const [studentRoll,setStudentRoll] = useState("");
    const [studentName,setStudentName] = useState("");
    const [studentEmail,setStudentEmail] = useState("");
    const [studentPhone,setStudentPhone] = useState("");
    const [studentBranch,setStudentBranch] = useState("");

    // Reset function to clear all fields
 const handleReset = () => {
  setStudentRoll("");
  setStudentName("");
  setStudentEmail(""); 
  setStudentPhone(""); 
  setStudentBranch(""); 
};
return (
  <div className='flex flex-1 flex-col border-2 border-gray p-3'>
  <Typography variant="h4" className='mb-5 font-medium text-lg p-2 border-b-2 border-gray ' color="blue-gray">
    Add a new Student
  </Typography>
    <div className="mb-1 flex flex-col gap-4">
      <Typography variant="h6" color="blue-gray" className="-mb-3">
        Enrollment Number
      </Typography>
      <Input
        size="lg"
        placeholder="Enter Roll Number"
        value={studentRoll}
        onChange={(e) => setStudentRoll(e.target.value)}
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      />
      
      <Typography variant="h6" color="blue-gray" className="-mb-3">
        Your Name
      </Typography>
      <Input
        size="lg"
        placeholder="Enter Full Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      />
      
      <Typography variant="h6" color="blue-gray" className="-mb-3">
        Your Email
      </Typography>
      <Input
        size="lg"
        placeholder="name@mail.com"
        name="studentEmail"
        value={studentEmail}
        onChange={(e) => setStudentEmail(e.target.value)}
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      />
      
      <Typography variant="h6" color="blue-gray" className="-mb-3">
        Phone
      </Typography>
      <Input
        type="number"
        size="lg"
        name="studentPhone"
        value={studentPhone}
        onChange={(e) => setStudentPhone(e.target.value)}
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      />
      
      <Typography variant="h6" color="blue-gray" className="-mb-3">
        Branch
      </Typography>
      <Input
        size="lg"
        name="studentBranch"
        value={studentBranch}
        onChange={(e) => setStudentBranch(e.target.value)}
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      />
    </div>
    <div className="flex flex-1 justify-between items-center gap-2 ">
    <Button  onClick={() => handleInsertStudent(studentRoll,studentName,studentEmail,studentPhone,studentBranch)} className=" mt-2 text-white bg-black rounded-lg px-5 py-3 justify-between items-center " fullWidth>
      Save
    </Button>
    <Button className=" mt-2 text-white bg-gray-500 rounded-3xl px-1 py-1 justify-between items-center"
        onClick={handleReset} fullWidth>
        Reset
      </Button>
</div>
</div>
)
}

export default StudentForm

