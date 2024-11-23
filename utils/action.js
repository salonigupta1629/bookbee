// import BookModel from "@/model/BookModel";
// // import DbConnect from "./DbConnect";
// import { redirect } from "next/navigation";
// import StudentModel from "@/model/StudentModel";


// export const handleBookCreate = async (formData) => {
// "use server"

//       //    DbConnect();
//          const data = {
//           bookName: formData.get('bookName'),
//           bookPrice: formData.get('bookPrice'),
//           authorName: formData.get('authorName'),
//           bookCategory: formData.get('bookCategory'),
//           bookCount: formData.get('bookCount'),
//     }
//     try{
//     const created = await BookModel.create(data);
//         redirect("/admin/book");
//     } catch (error) {
//       console.error("Error inserting student:", error)
//     }
//       };



"use server"
import { redirect } from "next/navigation";
import DbConnect from "./DbConnect";
import BookModel from "@/model/BookModel";
import { BookForm } from "@/app/(backend)/admin/book/_components/book-form";
 export async function handleInsertBook(bookName,authorName,bookCategory,bookCount){
      DbConnect();

      console.log(bookCategory);
      const create = await BookModel.create({bookName,authorName,bookCategory,bookCount,bookPrice})
            
      redirect("/admin/book")

return (
  <div className='flex flex-1 justify-center'>
      <BookForm handleInsertBook={handleInsertBook}/>
  </div>
)
 };

 
import StudentModel from "@/model/StudentModel";
import StudentForm from "@/app/(backend)/admin/student/_components/student-form";
 export async function handleInsertStudent(studentRoll,studentName,studentEmail,studentPhone,studentBranch){
      DbConnect();
      const create = await StudentModel.create({studentRoll,studentName,studentEmail,studentPhone,studentBranch})
      redirect("/admin/student")
return (
  <div className='flex flex-1 justify-center'>
      <StudentForm handleInsertStudent={handleInsertStudent}/>
  </div>
)


 };