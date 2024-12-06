// import React from 'react'
// import Searchbar from '../../components/searchbar'



// const Card = ({title,subtitle1,subtitle2,subtitle3,subtitle4}) => {
//   return (
//     <div className='flex flex-col w-[700px] mt-20 p-6  h-72 ml-5 border-black border-2'>
// <div className='flex flex-1 justify-between items-center '>
// <p className='font-bold text-lg mb-3'>Select {title}</p>
// <p><Searchbar placeholder="Enter the Id"/></p>
//     </div>
//     <div className='flex flex-col gap-8'>
//     <div className='flex flex-1 justify-between items-center'>
//     <p>{subtitle1}</p>
//     <p>{subtitle2}</p>
//     </div>
//     <div className='flex flex-1 justify-between items-center'>
// <p>{subtitle3}</p>
// <p>{subtitle4}</p>
//     </div>
//     <button className='px-4 py-2 rounded-lg bg-teal-400 self-end'>Select</button>
//     </div>
//     </div>
//   )
// }

// export default Card


"use client"
import { useState } from "react";

export default function BookCard({setBookData}) {
  const [bookId, setBookId] = useState("");
  const [bookDetails, setBookDetails] = useState(null);
  const [error, setError] = useState("");

  const fetchBookDetails = async () => {
    if (!bookId.trim()) {
      setError("Please enter a valid book ID");
      return;
    }

    try {
      const response = await fetch(`/api/books/${bookId.trim()}`);

      if (!response.ok) {
        throw new Error("Book not found or an error occurred");
      }

      const value = await response.json();
      console.log("Fetched books:",value);
      setBookDetails(value);
      // setBookData(data);
      setError("");
    } catch (err) {
      setBookDetails(null);
      setError(err.message);
    }
  };

  const handleSelect = () => {
if(bookDetails){
  setBookData(prevBooks => [...prevBooks,bookDetails.value]);
}
setBookDetails(null);
setBookId("");
  };

  return (
    <div className="mb-3 p-16 flex flex-col gap-4">
      <div className="flex flex-1 gap-32 justify-between items-center">
        <p className="font-bold text-lg mb-3">Select Book</p>
        <div className="flex flex-1 ">
          <input
            type="text"
            placeholder="Enter book ID"
            className="px-2 border py-1 w-full rounded-lg"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)} // Handle input change
          />
          <button
            type="button"
            onClick={fetchBookDetails} // Trigger fetch on button click
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            Search
          </button>
        </div>
      </div>

      {error && <p className="text-red-500">{error}</p>} {/* Display error message */}

      <div className="flex flex-col gap-8">
        {bookDetails ? (
          <table className="table-auto border-collapse border border-gray-300 w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Book Name</th>
                <th className="border border-gray-300 px-4 py-2">Author Name</th>
                <th className="border border-gray-300 px-4 py-2">Book Category</th>
                <th className="border border-gray-300 px-4 py-2">Book Count</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  {bookDetails.value.bookName || "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {bookDetails.value.authorName || "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {bookDetails.value.bookCategory || "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {bookDetails.value.bookCount || "N/A"}
                </td>
              </tr>
            </tbody>
          </table>
        ):(
          <table className="table-auto border-collapse border border-gray-300 w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Book Name</th>
                <th className="border border-gray-300 px-4 py-2">Author Name</th>
                <th className="border border-gray-300 px-4 py-2">Book Category</th>
                <th className="border border-gray-300 px-4 py-2">Book Count</th>
              </tr>
            </thead>
            <tbody>
              <tr >
                <td className="border border-gray-300 px-6 py-5">
                </td>
                <td className="border border-gray-300  px-6 py-5">
                </td>
                <td className="border border-gray-300  px-6 py-5">
                </td>
                <td className="border border-gray-300  px-6 py-5">
                </td>
              </tr>
            </tbody>
            </table>)
            }

          <button className="px-4 py-2 rounded-lg bg-teal-400 self-end" onClick={handleSelect}>
            Select
          </button>
      </div>
    </div>
  );
}
