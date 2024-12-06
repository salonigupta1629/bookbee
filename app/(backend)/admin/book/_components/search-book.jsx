



"use client";
import { useState } from "react";

const SearchBook = ({ books, setFilteredBooks }) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  // Handle search form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Search Keyword:", searchKeyword); // Debugging line to track search input

    // If search input is empty, reset the filtered students
    if (searchKeyword === "") {
      setFilteredBooks(books);
      console.log("Showing all books:", books); // Debugging line to check if all students are shown
    }else{
    // Filtering students based on search input
    const filteredData = books.filter((book) => 
        book.book._id.toLowerCase().includes(searchKeyword.toLowerCase()) ||  // Ensure studentRoll is treated as a string
        book.authorName.toLowerCase().includes(searchKeyword.toLowerCase()) ||   // Fallback to empty string if studentName is undefined
        book.bookName.toLowerCase().includes(searchKeyword.toLowerCase()) ||   // Fallback to empty string if studentEmail is undefined
        book.bookCount.toLowerCase().includes(searchKeyword.toLowerCase()) // Fallback to empty string if studentBranch is undefined
    );

    setFilteredBooks(filteredData);
  }
};

  return (
    <div>
      <div className="mb-4 flex items-center space-x-2">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search here"
            className="p-2 border rounded-lg"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)} // Update input state
          />
          <button type="submit" className="bg-black text-white px-4 py-2 rounded-lg">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBook;