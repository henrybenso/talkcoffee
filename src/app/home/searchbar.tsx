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
