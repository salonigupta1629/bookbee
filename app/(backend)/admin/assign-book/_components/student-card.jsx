
"use client"
import { useState } from "react";

export default function StudentCard({setStudentData}) {
  const [studentId, setStudentId] = useState("");
  const [studentDetails, setStudentDetails] = useState(null);
  const [error, setError] = useState("");

  const fetchStudentDetails = async () => {
    if (!studentId.trim()) {
      setError("Please enter a valid student ID");
      return;
    }

    try {
      const response = await fetch(`/api/students/${studentId.trim()}`);

      if (!response.ok) {
        throw new Error("Book not found or an error occurred");
      }

      const data = await response.json();
      console.log("Fetched books:",data);
      setStudentDetails(data);
      // setStudentData(data)
      setError("");
    } catch (err) {
      setStudentDetails(null);
      setError(err.message);
    }
  };

   // When the Select button is clicked, pass the data to the parent
   const handleSelect = () => {
    if (studentDetails) {
      setStudentData(studentDetails);  // Pass the data to the parent component
    }
    setStudentDetails(null);
    setStudentId("");
  };


  return (
    <div className="mb-3 p-16 flex flex-col gap-4">
      <div className="flex flex-1 gap-32 justify-between items-center">
        <p className="font-bold text-lg mb-3">Select Student</p>
        <div className="flex flex-1 ">
          <input
            type="text"
            placeholder="Enter student ID"
            className="px-2 border py-1 w-full rounded-lg"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)} // Handle input change
          />
          <button
            type="button"
            onClick={fetchStudentDetails} // Trigger fetch on button click
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            Search
          </button>
        </div>
      </div>

      {error && <p className="text-red-500">{error}</p>} {/* Display error message */}

      <div className="flex flex-col gap-8">
        {studentDetails ? (
          <table className="table-auto border-collapse border border-gray-300 w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Enrollment Number</th>
                <th className="border border-gray-300 px-4 py-2"> Name</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Branch</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  {studentDetails.data.studentRoll || "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {studentDetails.data.studentName || "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {studentDetails.data.studentEmail || "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {studentDetails.data.studentBranch || "N/A"}
                </td>
              </tr>
            </tbody>
          </table>
        )  : <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Enrollment Number</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Branch</th>
          </tr>
        </thead>
        <tbody>
        <tr>
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
            </table>}
          <button className="px-4 py-2 rounded-lg bg-teal-400 self-end" onClick={handleSelect}>
            Select
          </button>
      </div>
    </div>
  );
}
