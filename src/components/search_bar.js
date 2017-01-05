import React from 'react';

const SearchBar = () => {
  return (
    <div className="col-md-8 col-md-offset-2 search-bar">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search for..."
        />
        <span className="input-group-btn">
          <button className="btn btn-primary" type="button">Search!</button>
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
