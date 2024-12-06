// "use client";
// import { useState } from "react";

// const SearchStudent = ({ students, setFilteredStudents }) => {
//   const [searchKeyword, setSearchKeyword] = useState("");

//   // Handle search form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("Search Keyword:", searchKeyword); // Debugging line to track search input

//     // If search input is empty, reset the filtered students
//     if (searchKeyword.trim() === "") {
//       setFilteredStudents(students);
//       console.log("Showing all students:", students); // Debugging line to check if all students are shown
//       return;
//     }

//     // Filtering students based on search input
//     const filteredData = students.filter((student) => {
//       const studentData = [
//         String(student.studentRoll), // Ensure studentRoll is treated as a string
//         student.studentName || "",   // Fallback to empty string if studentName is undefined
//         student.studentEmail || "",  // Fallback to empty string if studentEmail is undefined
//         student.studentBranch || "", // Fallback to empty string if studentBranch is undefined
//       ];

//       // Debugging the filtering step
//       console.log("Checking student:", studentData);

//       return studentData.some((field) =>
//         field.toLowerCase().includes(searchKeyword.toLowerCase())
//       );
//     });

//     console.log("Filtered Data:", filteredData); // Debugging filtered data

//     setFilteredStudents(filteredData);
//   };

//   return (
//     <div>
//       <div className="mb-4 flex items-center space-x-2">
//         <form onSubmit={handleSubmit}>
//           <input
//             type="search"
//             placeholder="Search here"
//             className="p-2 border rounded-lg"
//             value={searchKeyword}
//             onChange={(e) => setSearchKeyword(e.target.value)} // Update input state
//           />
//           <button type="submit" className="bg-black text-white px-4 py-2 rounded-lg">
//             Search
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SearchStudent;




"use client";
import { useState } from "react";

const SearchStudent = ({ students, setFilteredStudents }) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  // Handle search form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Search Keyword:", searchKeyword); // Debugging line to track search input

    // If search input is empty, reset the filtered students
    if (searchKeyword === "") {
      setFilteredStudents(students);
      console.log("Showing all students:", students); // Debugging line to check if all students are shown
    }else{
    // Filtering students based on search input
    const filteredData = students.filter((student) => 
        student.studentRoll.toLowerCase().includes(searchKeyword.toLowerCase()) ||  // Ensure studentRoll is treated as a string
        student.studentName.toLowerCase().includes(searchKeyword.toLowerCase()) ||   // Fallback to empty string if studentName is undefined
        student.studentEmail.toLowerCase().includes(searchKeyword.toLowerCase()) ||   // Fallback to empty string if studentEmail is undefined
        student.studentBranch.toLowerCase().includes(searchKeyword.toLowerCase()) // Fallback to empty string if studentBranch is undefined
    );

    setFilteredStudents(filteredData);
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

export default SearchStudent;
