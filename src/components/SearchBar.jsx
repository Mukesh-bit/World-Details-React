import React from 'react'

const SearchBar = ({setquery}) => {
  return (
    <div className="search-container">
    <i className="fa-solid fa-magnifying-glass"></i>
    <input onChange={(e) => setquery(e.target.value)} type="text" placeholder="Search by Name or Region" />
  </div>
  )
}

export default SearchBar