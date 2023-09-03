import React, { useState } from "react";

export const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your search logic with the searchInput value here
    console.log("Search input:", searchInput);
  };

  return (
    <div>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={handleInputChange}
          />
          <button type="submit" className="btn btn-outline-success btn-sm">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};
