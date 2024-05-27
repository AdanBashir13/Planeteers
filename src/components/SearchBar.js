import React from "react";


function SearchBar({ onSearch }) {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        className="searchTerm"
        placeholder="Search Planeteers"
        onChange={handleChange}/>
    </div>
  );
}


export default SearchBar;
