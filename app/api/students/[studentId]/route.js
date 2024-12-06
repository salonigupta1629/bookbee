import { NextResponse } from 'next/server';
import DbConnect from '@/utils/DbConnect';
import StudentModel from '@/model/StudentModel';


export async function DELETE(req, { params }) {
  const { studentId } = params;  // Access the studentId from params

  try {
    await DbConnect();
    const deleted = await StudentModel.findByIdAndDelete(studentId);
  
    return NextResponse.json({
      message: `Student with ID ${studentId} deleted successfully.`,
    });
  } catch (error) {
    console.error('Error deleting student:', error);
    return NextResponse.json({ error: 'Failed to delete student' }, { status: 500 });
  }
}



export async function GET(req, { params }) {
  const {studentId} = params; 
  
  try{
  await DbConnect();
    let data = await StudentModel.findOne({_id: studentId});
  
    if(!data){
      return NextResponse.json({error: "Student not found"},{ status: 404 });
    }
  
    return NextResponse.json({data}, {status:200});
  
  }catch(error){
    return NextResponse.json({error: "Failed to fetch student details"}, { status: 500});
  }
  }
  
  