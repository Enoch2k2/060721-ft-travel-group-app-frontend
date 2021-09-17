
import React,  { useState } from 'react'
import icons from '../../assets/icons/data'
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
    <div >
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
         <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
           <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
               place
            </label>
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Place..." autoFocus/>
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
           <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
               city
            </label>
            <input type="text" name="city" value={form.city} onChange={handleChange} placeholder="City..."/>
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
           <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              image
            </label>
            <input type="text" name="image" value={form.image} onChange={handleChange} placeholder="Photo..."/>
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
           <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
             price
            </label>
          <input type="text" name="lowestPrice" value={form.lowestPrice} onChange={handleChange} placeholder="from..."/>

      </div>
          
     
   
        
      
        
       
      
          <button className=' stroke-current text-gray-50 m-auto w-12 h-12 bg-blue-600 rounded-md'>
            {icons[6].svg}
          </button>
        
      </form>
      
  </div>
  )
}

export default PointOfInterestForm