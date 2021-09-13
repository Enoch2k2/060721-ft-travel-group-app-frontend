
import React,  { useState } from 'react'

const PointOfInterestForm = () => {

  //NOTE: number of reviews/average rating should be handled by backend
  const [form, setForm] = useState({
      name: "",
      city: "",
      image: "",
      lowestPrice: "",
    })

    const handleChange = e => {
      setForm({...form, [e.target.name]:e.target.value})
    }
 
    const handleSubmit = async e => {
      e.preventDefault()
      // const method = "POST"
      // const headers = {"Content-Type":"application/json"}
      // const body = form
      // const response = await fetch(``, {method:method,headers:headers, body:JSON.stringify(body)})
      // const data = response.json()
    }

  return (
    <div className="ml-20">
      <h2>Create a Point of Interests</h2>
      <form onSubmit={handleSubmit}>
        <div className="p-2">
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Place..."/>
        </div>
        <div className="p-2">
          <input type="text" name="city" value={form.city} onChange={handleChange} placeholder="City..."/>
        </div>
        <div className="p-2">
          <input type="text" name="image" value={form.image} onChange={handleChange} placeholder="Photo"/>
        </div>
        <div className="p-2">
          <input type="text" name="lowestPrice" value={form.lowestPrice} onChange={handleChange} placeholder="Lowest Price..."/>
        </div>
        <div>
          <button >Submit</button>
        </div>
      </form>
      
    </div>
  )
}

export default PointOfInterestForm
