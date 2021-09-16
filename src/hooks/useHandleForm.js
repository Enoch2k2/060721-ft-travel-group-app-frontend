import { useState } from 'react'

const useHandleForm = (initialForm) => {
  const [form, setForm] = useState(initialForm)

  const handleChange = e => {
    setForm(
      {...form,
      [e.target.name]:e.target.value}
      )
      console.log(e.key)
  }
  return [form, handleChange]
}

export default useHandleForm
