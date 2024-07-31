import React from "react";

const SearchFilter = ({ searchQuery, setSearchQuery }) => {
  const InputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search by name or address..."
        value={searchQuery}
        onChange={InputChange}
      />
    </div>
  );
};

export default SearchFilter;
