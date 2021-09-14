import React, { useState } from 'react'

const SearchBar = () => {
  const [search, setSearch] = useState({searchTerm:"", sorting:""})

  const handleChange = e => {
    setSearch({...search,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(search)
  }

  return (

      <form onSubmit={handleSubmit}>
     
        <input type="text" name="search" value={search.search} onChange={handleChange}placeholder="Search..."/>
        <input type="submit" placeholder='Search'/>
    
      
          <select name="sorting">
            <option value="rating">Rating</option>
            <option value="pricePoint">Price Point</option>
          </select>
       
      </form>
  
  )
}

export default SearchBar
