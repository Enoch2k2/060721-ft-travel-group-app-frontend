import React, { useState } from 'react'

const useHandleForm = () => {
  const [form, setForm] = useState(initialForm)

  const handleChange = e => {
    setForm({...form,
      [e.target.name] : e.target.value}
      )
  }


  return (
    <div>
      
    </div>
  )
}

export default useHandleForm
