import React, { useState } from 'react'
import icons from '../../assets/icons/data'

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

    <>
      <form onSubmit={handleSubmit} className='a-content'>
         <h1>Where are you going ? </h1>
         
        <input className='search'  type="text" name="search" value={search.search} onChange={handleChange}placeholder="Search..."/>
        <button className='search-button'>{icons[7].svg}</button>
           
            {/* <span > {icons[2].svg}Filter</span> */}
        
      
          {/* <select className="border-2 border-gray-300" name="sorting">
            <option value="rating">Rating</option>
            <option value="pricePoint">Price Point</option>
          </select> */}
       
      </form>
  </>

  )
}

export default SearchBar
