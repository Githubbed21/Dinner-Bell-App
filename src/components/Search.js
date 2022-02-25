import React from "react";



const Search = props => {

  let handleChange = (event) => {
     props.changeSearchTerm(event.target.value)
  }

  return ( 
    <div className="ui icon search">
      <div className="ui icon input">
        <input className="prompt" value={props.searchTerm} onChange={handleChange} />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search;