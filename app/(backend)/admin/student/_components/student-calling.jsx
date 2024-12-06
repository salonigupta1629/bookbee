// import {AiOutlineDelete} from "react-icons/ai";
// import { FaEdit } from "react-icons/fa";
// import DbConnect from '@/utils/DbConnect' ;
// import studentModel from "@/model/StudentModel";

// const StudentCalling = async () => {
//   DbConnect();

//   const students = await studentModel.find({})
//   return (
//     <div className='flex flex-col w-full'>
//     <p className=' bg-fuchsia-300 mb-2 p-9  text-xl font-sans text-left font-bold'> Student List</p>
//       <div className=' bg-slate-100 w-full text-center rounded-lg'>
//       <table className='w-full border border-black rounded-lg'>
//         <thead>
//           <tr className='bg-fuchsia-300 '>
//             <th className='border px-5 py-2 border-black'> Sno.</th>
//             <th className='border px-5 py-2 border-black'>Enrollment Number</th>
//             <th className='border px-5 py-2 border-black'> Name</th>
//             <th className='border px-5 py-2 border-black'>Email</th>
//             <th className='border px-5 py-2 border-black'>Branch</th>
//             <th className='border px-5 py-2 border-black'>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//       students.map((student,index)=>(
// <tr key={student._id} className='bg-yellow-200'>
// <td className='border px-5 py-2 border-black'>{index + 1}</td>
// <td className='border px-5 py-2 border-black'>{student.studentRoll}</td>
// <td className='border px-5 py-2 border-black'>{student.studentName}</td>
// <td className='border px-5 py-2 border-black'>{student.studentEmail}</td> 
// <td className='border px-5 py-2 border-black'>{student.studentBranch}</td> 
// <td className='border px-5 py-2  border-black'>
// <button type="submit" className="bg-green-700 px-2 py-2 m-2 rounded-lg text-white"><FaEdit/></button>
// <button type="submit" className="bg-red-700 px-2 py-2  m-2  rounded-lg text-white"><AiOutlineDelete/></button>
// </td>
//             </tr>
//       ))
//           }
//         </tbody>
//       </table>
//     </div>
//     </div>
//   )
// }

// export default StudentCalling


"use client"
import { Card, Typography } from "@material-tailwind/react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import SearchStudent from "./search-student";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const TABLE_HEAD = ["Sno.", "Enrollment Number", "Name", "Email", "Branch", "Action"];

export function StudentCalling({ students}) {
  const router = useRouter(); 
  console.log(students)
  const [filteredStudents, setFilteredStudents] = useState(students); // State to hold the filtered students

  // Use effect to update filteredStudents whenever the `students` prop changes
  useEffect(() => {

    setFilteredStudents(students);
  }, [students]);

  const handleDelete = async (studentId) => {
    try {
      const response = await fetch(`/api/students/${studentId}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete student');
      }
  
      setFilteredStudents((prevStudents) =>
        prevStudents.filter((student) => student.studentid !== studentId)
      );
  
      alert(`Student with ID ${studentId} deleted successfully.`);
    } catch (error) {
      console.error('Error deleting student:', error);
      alert('Failed to delete student');
    }
    router.push("/admin/student")
  };


  return (
    <Card className="h-full w-full overflow-scroll ">
      <Typography variant="h4" className="mb-5 p-4 font-medium text-lg border-b-2 border-gray " color="blue-gray">
        <div className="flex flex-1 justify-between items-center">
          <span >Student List </span>
          <SearchStudent students={students} setFilteredStudents={setFilteredStudents} />
        </div>
      </Typography>
      <table className="w-full min-w-max table-auto text-left">
        <thead>

          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map(({ _id,studentRoll, studentName, studentEmail, studentBranch }, index) => {
            const isLast = index === students.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={studentRoll}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {index + 1}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {studentRoll}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {studentName}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {studentEmail}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {studentBranch}
                  </Typography>
                </td>
                <td className="p-4 flex gap-4">
                  <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium" onClick={() => handleUpdate(_id)} >
                    <FaEdit />
                  </Typography>
                  {/* <Link href={`/admin/student/${_id}`}> */}
                   <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium" onClick={() => handleDelete(_id)}> 
                    <AiOutlineDelete />
                  </Typography>
                  {/* </Link> */}
              
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}



