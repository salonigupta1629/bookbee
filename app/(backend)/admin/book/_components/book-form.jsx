// import BookModel from '@/model/BookModel';
// import CategoryModel from '@/model/CategoryModel';
// import DbConnect from '@/utils/DbConnect';
// import { redirect } from 'next/navigation';

// const BookForm = async () => {
//     DbConnect();

//     const categories = await CategoryModel.find({});

//     const handleInsertBook = async (formData) => {
//         "use server"

//         const data = {
//             bookName: formData.get('bookName'),
//             bookPrice: formData.get('bookPrice'),
//             authorName: formData.get('authorName'),
//             bookCategory: formData.get('bookCategory'),
//             bookCount: formData.get('bookCount'),
//         }

//         const created = await BookModel.create(data);

//         redirect("/admin/book");
//     }
//     // export async function DeleteBook(id,formData){
//     //     DbConnect();
//     //     await book.findByIdAndDelete(id);
//     //     redirect("/admin/book");
//     // }
    
//     return (
//         <div className='flex flex-col '>
//         <p className=' bg-fuchsia-300 mb-2 p-4 text-xl font-bold font-sans text-center'>Add a new Book</p>
//         <div className='h-auto flex p-9 flex-col flex-1 border bg-fuchsia-300 rounded-lg '>
//             <form action={handleInsertBook} method="post" encType="multipart/form-data">
//                 <div className='mb-3'>
//                     <label htmlFor="bookName">Title</label>
//                     <input type="text" id="bookName" name="bookName" className='p-3 border border-black  mb-5 w-full' />
//                 </div>
//                 <div className='mb-3'>
//                     <label htmlFor="bookPrice">Book Price</label>
//                     <input type="Number" id="bookPrice" name="bookPrice" className='p-3 border border-black  mb-5 w-full' />
//                 </div>
//                 <div className='mb-3'>
//                     <label htmlFor="authorName">Author</label>
//                     <input type="text" id="authorName" name="authorName" className='p-3 mb-5 border border-black  w-full' />
//                 </div>
//                 <div className='mb-3'>
//                     <label htmlFor="bookCategory">Book Category</label>
//                     <select id="bookCategory" name="bookCategory" className='p-3 border mb-5 w-full'>
//                         <option value=" " selected disabled >Select Category here</option>
//                         {
//                             categories.map((category) => (
//           <option key={category._id} value={category._id} >{category.catTitle}</option>
//                             ))
//                         }
//                     </select>
//                 </div>
//                 <div className='mb-3'>
//                     <label htmlFor="bookCount">Book Count</label>
//                     <input type="Number" id="bookCount" name="bookCount" className='p-3 border border-black  mb-5 w-full' />
//                 </div>
//               <div className='flex flex-1 justify-between'>
//               <div className='mb-3 flex justify-center '>
//                     <input type="submit" value="Save" className='bg-teal-600 text-white px-3 py-2 rounded-lg' />
//                 </div>
//                 <div className='mb-3 flex '>
//                     <input type="reset" value="reset" className='bg-black text-white px-3 py-2 rounded-lg' />
//                 </div>
//               </div>
//             </form>
//         </div>
//         </div>
//     )
// }

// export default BookForm



"use client"
import { Button, Card, Input, Option, Select, Typography } from "@material-tailwind/react";
import { useState } from "react";
import DbConnect from "@/utils/DbConnect";
import { handleInsertBook } from "@/utils/action";
   
export function BookForm({categories}) {
DbConnect();
    const [bookName,setBookName] = useState("");
    const [authorName,setAuthorName] = useState("");
    const [bookCategory,setBookCategory] = useState("");
    const [bookCount,setBookCount] = useState("");

    return (
       <Card color="transparent" shadow={false} className='flex flex-1 flex-col border-2 border-gray p-5' >
        <Typography variant="h4" color="blue-gray" className="pb-4 border-b-2 border-gray font-medium text-lg">
        Add a new Book
        </Typography>
          <div className="mb-1 flex flex-col gap-4">
            <Typography variant="h6" color="blue-gray" className="-mb-3 mt-2">
              Title
            </Typography>
            <Input
              size="lg"
              placeholder="Enter Book Name"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
              className=" !border-t-blue-gray-400 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Author
            </Typography>
            <Input
              size="lg"
              placeholder="Enter Author Name"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className=" !border-t-blue-gray-400 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Category
            </Typography>
            <div className="w-72 ">
            <Select className="w-96 h-10"
              value={bookCategory} // bind the Select value to the state
              onChange={(value) => setBookCategory(value)} // Update the state on change
            > 
             
              <Option value=" " selected disabled >Select Category here</Option>
                        {
                            categories.map((category) => (
                              <Option key={category._id} value={category._id}>{category.catTitle}</Option>
                            ))
                        }
            </Select>
          </div> 


              <Typography variant="h6" color="blue-gray" className="-mb-3">
              Count
            </Typography>
            <Input
              type="number"
              size="lg"
              value={bookCount}
              onChange={(e) => setBookCount(e.target.value)}
              className=" !border-t-blue-gray-200  focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button className="mt-6 text-white bg-black rounded-lg px-5 py-3 justify-between items-center " onClick={() => handleInsertBook(bookName,authorName,bookCategory,bookCount)} fullWidth>
            Save
          </Button>
      </Card>
    );
  }





