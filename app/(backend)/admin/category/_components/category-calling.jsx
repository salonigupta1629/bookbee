import {AiOutlineDelete} from "react-icons/ai";
import {TiTick} from "react-icons/ti";
import DbConnect from '@/utils/DbConnect'
import Category from "@/model/Category";

const CategoryCalling = async () => {
    DbConnect();

    const category = await Category.find({});
    return (
        <div className='flex flex-col w-[1400px]'>
    <p className='  mb-2 p-4 text-xl font-sans text-left font-bold'> Category List</p>
        <div className=' bg-slate-100 w-full text-center rounded-lg'>
            <table className='w-full border border-black rounded-lg'>
                <thead>
                    <tr >
                        <th className='border border-black p-3'>Category Id</th>
                        <th className='border border-black p-3'>Category Title</th>
                        <th className='border border-black p-3'>Category Description</th>
                        <th className='border border-black p-3'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        category.map((cat, i) => (
                            <tr key={i} >
                                <td className='border border-black p-3'>{cat._id}</td>
                                <td className='border border-black p-3'>{cat.catTitle}</td>
                                <td className='border border-black p-3'>{cat.catDescription}</td>
                                <td className="border border-black">
<span className="flex flex-1 justify-around">
    <button type="submit" className=" px-3 py-2 rounded-lg text-black"><TiTick/></button>
    <button type="submit" className=" px-3 py-2 rounded-lg text-black"><AiOutlineDelete/></button>
</span>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default CategoryCalling




// "use client";
// import { useState, useEffect } from 'react';
// import { AiOutlineDelete } from 'react-icons/ai';
// import { TiTick } from 'react-icons/ti';
// import DbConnect from '@/utils/DbConnect';
// import Category from '@/model/Category';
// import BookForm from './BookForm'; // Assuming BookForm is in the same folder

// const CategoryCalling = () => {
//   const [categories, setCategories] = useState([]);
//   const [searchResults, setSearchResults] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   // Fetch categories when the component mounts
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         await DbConnect();
//         const categoryList = await Category.find({});
//         setCategories(categoryList); // Store categories in state
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   // Handle category search by ID
//   const handleSearch = async () => {
//     if (!searchQuery) {
//       alert('Please enter a Category ID to search.');
//       return;
//     }

//     try {
//       const result = await Category.find({ _id: searchQuery });
//       if (result.length > 0) {
//         setSearchResults(result); // Update the search results
//         alert('Category found!');
//       } else {
//         alert('Category not found!');
//         setSearchResults([]);
//       }
//     } catch (error) {
//       console.error('Error searching for category:', error);
//     }
//   };

//   return (
//     <div className="flex flex-col w-[1400px]">
//       {/* Pass categories as a prop to BookForm */}
//       <BookForm categories={categories} />
      
//       {/* Search Bar and Button */}
//       <div className="mb-4 flex items-center space-x-2">
//         <input
//           type="text"
//           id="categorySearch"
//           placeholder="Enter Category ID"
//           className="p-2 border rounded-lg"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)} // Handle input change
//         />
//         <button
//           onClick={handleSearch}
//           className="bg-teal-700 text-white px-4 py-2 rounded-lg"
//         >
//           Search
//         </button>
//       </div>

//       {/* Display categories table */}
//       <div className="bg-slate-100 w-full text-center rounded-lg">
//         <table className="w-full border border-black rounded-lg">
//           <thead>
//             <tr className="bg-teal-200">
//               <th className="border border-black p-3">Category Id</th>
//               <th className="border border-black p-3">Category Title</th>
//               <th className="border border-black p-3">Category Description</th>
//               <th className="border border-black p-3">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {searchResults.length > 0
//               ? searchResults.map((cat, i) => (
//                   <tr key={i} className="bg-yellow-200">
//                     <td className="border border-black p-3">{cat._id}</td>
//                     <td className="border border-black p-3">{cat.catTitle}</td>
//                     <td className="border border-black p-3">{cat.catDescription}</td>
//                     <td className="border border-black">
//                       <span className="flex flex-1 justify-around">
//                         <button type="submit" className="bg-green-700 px-3 py-2 rounded-lg text-white">
//                           <TiTick />
//                         </button>
//                         <button type="submit" className="bg-red-700 px-3 py-2 rounded-lg text-white">
//                           <AiOutlineDelete />
//                         </button>
//                       </span>
//                     </td>
//                   </tr>
//                 ))
//               : categories.map((cat, i) => (
//                   <tr key={i} className="bg-yellow-200">
//                     <td className="border border-black p-3">{cat._id}</td>
//                     <td className="border border-black p-3">{cat.catTitle}</td>
//                     <td className="border border-black p-3">{cat.catDescription}</td>
//                     <td className="border border-black">
//                       <span className="flex flex-1 justify-around">
//                         <button type="submit" className="bg-green-700 px-3 py-2 rounded-lg text-white">
//                           <TiTick />
//                         </button>
//                         <button type="submit" className="bg-red-700 px-3 py-2 rounded-lg text-white">
//                           <AiOutlineDelete />
//                         </button>
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default CategoryCalling;



