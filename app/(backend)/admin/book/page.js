// "use server"
// import React from 'react'
// import { BookForm } from './_components/book-form'
// import { BookCalling } from './_components/book-calling'
// import DbConnect from '@/utils/DbConnect'
// import BookModel from '@/model/BookModel'
// import { redirect } from 'next/navigation'

// const page = () => {
//   const books =  BookModel.find().populate('bookCategory');

//   const handleBookCreate = async() => {
// "use server"
//  DbConnect();

// let data = await BookModel.create();

// redirect("/admin/book");
//   }

//   return (
//     <div className='flex flex-1 gap-6 p-9'>
//       <div className='w-4/12 flex h-auto'>
//       <BookForm handleBookCreate={handleBookCreate}/>

//       </div>
//       <div className='w-8/12 flex'>
//       <BookCalling books={books} />
//       </div>
//     </div>
//   )
// }

// export default page

// "use server"
// import React from 'react'
// // import { BookForm } from './_components/book-form'
// import { BookCalling } from './_components/book-calling'
// import DbConnect from '@/utils/DbConnect'
// import BookModel from '@/model/BookModel'
// import BookForm from './_components/book-form'

// const page = async () => {
// DbConnect();
// const bookies = await BookModel.find().populate('bookCategory');
//   return (
//     <div className='flex flex-1 gap-6 p-9'>
//       <div className='w-4/12 flex h-auto'>
//         <BookForm/>
//       </div>
//       <div className='w-8/12 flex'>
//         <BookCalling books={bookies} />
//       </div>
//     </div>
//   )
// };
// export default page






"use server"
import React from 'react';
import DbConnect from '@/utils/DbConnect';
import BookModel from '@/model/BookModel';
import { BookForm } from './_components/book-form';
import Category from '@/model/Category';
import { BookCalling } from './_components/book-calling';

const page = async () => {
  // Connect to the database
  DbConnect();

  const categories = await Category.find({});

  // Fetch all books with populated category data
  const books = await BookModel.find({});

  return (
    <div className="flex flex-1 gap-6 p-9">
      <div className="w-4/12 flex h-auto">
        <BookForm categories={categories}/>
      </div>
      <div className="w-8/12 flex">
        <BookCalling books={books} />
      </div>
    </div>
  );
};

export default page;



