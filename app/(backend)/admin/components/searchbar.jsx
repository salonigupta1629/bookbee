"use client"
import Book from '@/model/BookModel';
import DbConnect from '@/utils/DbConnect';
import React, { useState } from 'react'

const Searchbar = ({placeholder}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = async () => {

        if (!searchQuery) {
          alert('Please enter a Category ID to search.');
          return;
        }
    
        try {
          
          DbConnect();
          const result = await Book.find({ _id: searchQuery });
          if (result.length > 0) {
            setSearchResults(result);
            alert('Category found!');
          } 
          else {
            alert('Category not found!');
            setSearchResults([]);
          }
        } catch (error) {
          console.error('Error searching for category:', error);
        }
      };
  return (
    <div>
      <div className="mb-4 flex items-center space-x-2">
        <input
          type="text"
          id="categorySearch"
          placeholder={placeholder}
          className="p-2 border rounded-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Handle input change
        />
        <button
          onClick={handleSearch}
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          Search
        </button>
      </div>

    </div>
  )
}

export default Searchbar