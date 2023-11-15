"use client";

import React, { useState } from 'react';

export default function Searchbar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // Perform a search request to your backend API
      const response = await fetch(`/api/search?term=${searchTerm}`);
      const result = await response.json();

      // Handle the fetched data, update the UI, etc.
      console.log('Search result:', result);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <label>
      <span>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            id="search"
            name="search"
            className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search for a shop..."
          />
          <button type="submit">Search</button>
        </form>
      </span>
    </label>
  );
}
