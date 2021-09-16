import React from 'react'
import useHandleForm from '../hooks/useHandleForm'

const SearchBar = () => {
  //useHandleForm replaces the need for state and a handlechange funciton
  const [form, handleForm] = useHandleForm({searchTerm:"", sorting:""})
  // debugger
  // const [search, setSearch] = useState({searchTerm:"", sorting:""})

  // const handleChange = e => {
  //   setSearch({...search,
  //     [e.target.name]:e.target.value
  //   })
  // }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(form)
  }

  return (

      <form onSubmit={handleSubmit}>
     
        <input type="text" name="searchTerm" value={form.searchTerm} onChange={e => handleForm(e)} placeholder="Search..."/>
        <input type="submit" placeholder='Search'/>
    
      
          <select className="border-2 border-gray-300" name="sorting">
            <option value="rating">Rating</option>
            <option value="pricePoint">Price Point</option>
          </select>
       
      </form>
  
  )
}

export default SearchBar
