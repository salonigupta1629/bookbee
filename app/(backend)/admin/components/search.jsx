// "use client"

// import { useState } from "react"

// const Search = ({books}) => {
//   console.log(books)
//     const [catData,setCatData] = useState(books)
//     const [searchKeyword,setSearchKeyword] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if(searchKeyword === ""){
// setCatData(books);
//         }
//         else{
//             setCatData(catData.filter((item) =>item["book_id"] ==searchKeyword));
//         }
//     }
//     return (
//         <div>
//           <div className="mb-4 flex items-center space-x-2">
//             <form onSubmit={handleSubmit} >
//             <input
//               type="search"
//             //   id="categorySearch"
//               placeholder="search"
//               className="p-2 border rounded-lg"
//               value={searchKeyword}
//               onChange={(e) => setSearchKeyword(e.target.value)} // Handle input change
//             />
//             <button type="submit"
//               className="bg-black text-white px-4 py-2 rounded-lg"
//             >
//               Search
//             </button>
//     </form>
//           </div>
//         </div>
//       )
// }

// export default Search




"use client";
import { useState } from "react";


// Search Component
const Search = ({ books, setFilteredBooks }) => {
  const [searchKeyword, setSearchKeyword] = useState(""); // To capture search input

  // Handle search form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchKeyword === "") {
      // If search input is empty, show all books
      setFilteredBooks(books);
    } else {
      // Filter books based on search input (matching 'bookName' or 'book_id')
      const filteredData = books.filter((book) =>
        book.bookName.toLowerCase().includes(searchKeyword.toLowerCase()) || 
        book._id.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        book.authorName.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        book.bookCategory.toLowerCase().includes(searchKeyword.toLowerCase())
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
            onChange={(e) => setSearchKeyword(e.target.value)} // Handle input change
          />
          <button type="submit" className="bg-black text-white px-4 py-2 rounded-lg">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
