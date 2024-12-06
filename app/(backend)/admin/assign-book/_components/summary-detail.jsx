"use client";
import React from "react";

export default function SummaryDetail({ studentData, bookData }) {
  console.log("bookData:",bookData);
  return (
    <div className="mb-3 p-16 flex flex-col gap-4">
      <p className="font-bold text-lg mb-3">Summary Details</p>

      <p className="font-bold text-lg mb-3 border-b-2">Student Detail</p>
      <div className="flex flex-col gap-8">
        {studentData ? (
          <table className="table-auto border-collapse border border-gray-300 w-full">
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
                <td className="border border-gray-300 px-4 py-2">
                  {studentData.data.studentRoll || "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {studentData.data.studentName || "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {studentData.data.studentEmail || "N/A"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {studentData.data.studentBranch || "N/A"}
                </td>
              </tr>
            </tbody>
          </table>
        ) : <table className="table-auto border-collapse border border-gray-300 w-full">
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
      </div>

      <p className="font-bold text-lg mb-3">Book Details</p>
      <div className="flex flex-col gap-8">
      {bookData ? (
    <table className="table-auto border-collapse border border-gray-300 w-full">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">Book Name</th>
          <th className="border border-gray-300 px-4 py-2">Author Name</th>
          <th className="border border-gray-300 px-4 py-2">Category</th>
          <th className="border border-gray-300 px-4 py-2">Book Count</th>
        </tr>
      </thead>
      <tbody>
        {bookData.map((book, index) => (
          <tr key={index}>
            <td className="border border-gray-300 px-4 py-2">{book.bookName || "N/A"}</td>
            <td className="border border-gray-300 px-4 py-2">{book.authorName || "N/A"}</td>
            <td className="border border-gray-300 px-4 py-2">{book.bookCategory || "N/A"}</td>
            <td className="border border-gray-300 px-4 py-2">{book.bookCount || "N/A"}</td>
          </tr>
        ))}
      </tbody>
    </table>
        ) :(
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
            </table>)}
      </div>
    </div>
  );
}
