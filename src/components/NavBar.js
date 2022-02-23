import React, { useState } from "react";


function Search({search, handleChange, sortValue, handleSortChange}) {
  return(
    <div className="ui search">
      <select value={sortValue} onChange={handleSortChange}>
        <option value='all'>Anything goes!</option>
        <option value='breakfast'>Breakfast</option>
        <option value='lunch'>Lunch</option>
        <option value='dinner'>Dinner</option>
      </select>
      <div className="ui icon input">
        <input className="prompt" value={searchTerm} onChange={handleChange} />
        <input className="search icon" />
      </div>
    </div>
  )
}

export default Search;