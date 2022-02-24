import React from "react";

const Search = props => {

  let handleChange = () => {

  }

  return ( 
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompts" value={props.searchTerm} onChange={handleChange} />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search;