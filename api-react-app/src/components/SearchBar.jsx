import React from "react";

const SearchBar = ({ setSearchTerm }) => {
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <input class="input"
      type="text"
      placeholder="Search for a movie..."
      onChange={handleSearch}
      style={{ width: "300px", padding: "8px", margin: "20px 0" }}
    />
  );
};

export default SearchBar;
