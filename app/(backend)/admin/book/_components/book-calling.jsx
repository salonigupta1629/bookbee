// import {AiOutlineDelete} from "react-icons/ai";
// import { FaEdit } from "react-icons/fa";
// import React from 'react'
// import DbConnect from "@/utils/DbConnect";
// import BookModel from "@/model/BookModel";

// const BookCalling = async () => {
//   DbConnect();

//   return (
//     <div className='flex flex-col w-full'>
//     <p className=' bg-fuchsia-300 mb-2 p-9 text-xl font-sans text-left font-bold'> Book List</p>
//       <div className=' bg-slate-100 w-full text-center rounded-lg'>
//       <table className='w-full border border-black rounded-lg'>
//         <thead>
//           <tr className='bg-fuchsia-300 '>
//             <th className='border px-5 py-2 border-black'>Sno.</th>
//             <th className='border px-5 py-2 border-black'>Book Id</th>
//             <th className='border px-5 py-2 border-black'>Title</th>
//             <th className='border px-5 py-2 border-black'>Author</th>
//             <th className='border px-5 py-2 border-black'>Category</th>
//             <th className='border px-5 py-2 border-black'>Count</th>
//             <th className='border px-5 py-2 border-black'>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//       books.map((book,index)=>(
//         // let id = book._id ;
//         // const BookDeletewithId = DeleteBook.bind(null,id);

// <tr key={index} className='bg-yellow-200'>
// <td className='border px-5 py-2 border-black'>{index + 1}</td>
// <td className='border px-5 py-2 border-black'>{book._id}</td>
// <td className='border px-5 py-2 border-black'>{book.bookName}</td>
// <td className='border px-5 py-2 border-black'>{book.authorName}</td> 

// <td className='border px-5 py-2 border-black'>{book.bookCategory?.catTitle}</td> 
// <td className='border px-5 py-2 border-black'>{book.bookCount}</td>
// <td className='border px-5 py-2 gap-3 flex flex-1 m-2'>
// <button type="submit" className="bg-green-700 px-3 py-2 rounded-lg text-white"><FaEdit/></button>
// {/* <form action={BookDeletewithId} method="post" > */}
// <button className="bg-red-700 px-3 py-2 rounded-lg text-white"><AiOutlineDelete/></button>
// {/* </form> */}
// </td>
// </tr>
//       ))
//           }
//         </tbody>
//       </table>
//     </div>
//     </div>
//   )
// }

// export default BookCalling




// "use client";
// import { AiOutlineDelete } from "react-icons/ai";
// import { FaEdit } from "react-icons/fa";
// import { Card, Typography } from "@material-tailwind/react";
// // import Searchbar from "../../components/searchbar";
// import Search from "../../components/search";

// const TABLE_HEAD = ["Sno.", "BookId", "Title", "Author", "Category", "Count", "Action"];

// export function BookCalling({ books }) {
//   return (
//     <Card className="h-full w-full overflow-scroll ">
//         <Typography variant="h4" className="mb-5 p-4 font-medium text-lg border-b-2 border-gray" color="blue-gray">
//           <div className="flex flex-1 justify-between items-center">
//     <span >Book List </span>
//     {/* <span><Searchbar placeholder="Enter the Book Id"/></span> */}
//     <span><Search books={books}/></span>
//           </div>
//   </Typography>
//       <table className="w-full min-w-max table-auto text-left">
//         <thead>
//           <tr>
//             {TABLE_HEAD.map((head) => (
//               <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
//                 <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
//                   {head}
//                 </Typography>
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {books.map(({ _id, bookName, authorName, bookCategory, bookCount }, index) => (
//             <tr key={bookName} className="even:bg-blue-gray-50/50">
//               <td className="p-4">
//                 <Typography variant="small" color="blue-gray" className="font-normal">
//                   {index + 1}
//                 </Typography>
//               </td>
//               <td className="p-4">
//                 <Typography variant="small" color="blue-gray" className="font-normal">
//                   {_id}
//                 </Typography>
//               </td>
//               <td className="p-4">
//                 <Typography variant="small" color="blue-gray" className="font-normal">
//                   {bookName}
//                 </Typography>
//               </td>
//               <td className="p-4">
//                 <Typography variant="small" color="blue-gray" className="font-normal">
//                   {authorName}
//                 </Typography>
//               </td>
//               <td className="p-4">
//                 <Typography variant="small" color="blue-gray" className="font-normal">
//                   {bookCategory?.catTitle || 'N/A'}
//                 </Typography>
//               </td>
//               <td className="p-4">
//                 <Typography variant="small" color="blue-gray" className="font-normal">
//                   {bookCount}
//                 </Typography>
//               </td>
//               <td className="p-4 flex gap-4">
//                 <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
//                   <FaEdit />
//                 </Typography>
//                 <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
//                   <AiOutlineDelete />
//                 </Typography>
//               </td>
              
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </Card>
//   );
// }


"use client"

import { useState, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { Card, Typography } from "@material-tailwind/react";
import Search from "../../components/search";
import { useRouter } from "next/navigation";

const TABLE_HEAD = ["Sno.", "BookId", "Title", "Author", "Category", "Count", "Action"];

export function BookCalling({ books }) {
  const router = useRouter(); 

  console.log(books)
  const [filteredBooks, setFilteredBooks] = useState(books); // State to hold the filtered books

  // Use effect to update filteredBooks whenever the `books` prop changes
  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  const handleDelete = async (bookId) => {
    try {
      const response = await fetch(`/api/books/${bookId}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete book');
      }
  
      setFilteredBooks((prevBooks) =>
        prevBooks.filter((book) => book.bookid !== bookId)
      );
  
      alert(`Book with ID ${bookId} deleted successfully.`);
    } catch (error) {
      console.error('Error deleting book:', error);
      alert('Failed to delete book');
    }
    router.push("/admin/book")
  };

  return (
    <Card className="h-full w-full overflow-scroll ">
      <Typography variant="h4" className="mb-5 p-4 font-medium text-lg border-b-2 border-gray" color="blue-gray">
        <div className="flex flex-1 justify-between items-center">
          <span>Book List</span>
          {/* Pass the filteredBooks setter to Search component */}
    <Search books={books} setFilteredBooks={setFilteredBooks} />
        </div>
      </Typography>
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map(({ _id, bookName, authorName, bookCategory, bookCount }, index) => (
            <tr key={_id} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {index + 1}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {_id}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {bookName}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {authorName}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {bookCategory.catTitle || 'N/A'}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {bookCount}
                </Typography>
              </td>
              <td className="p-4 flex gap-4">
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                  <FaEdit />
                </Typography>
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium" onClick={() => handleDelete(_id)}>
                  <AiOutlineDelete />
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
