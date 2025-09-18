import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
function Create() {
  const navigate = useNavigate()
  // state for adding values
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  // when the submit button is clicked it send the data to json server
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post('http://localhost:3000/users', values)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Add a User</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label htmlFor='name' className='form-label'>Name:</label>
            <input type='text' name='name' className='form-control' placeholder='Enter Name' value={values.name}
            onChange={handleChange}/>
          </div>
          <div className='mb-2'>
            <label htmlFor='email' className='form-label'>Email:</label>
            <input type='email' name='email' className='form-control' placeholder='Enter Email' value={values.email}
            onChange={handleChange} />
          </div>
          <div className='mb-3'>
            <label htmlFor='phone' className='form-label'>Phone:</label>
            <input type='tel' name='phone' className='form-control'maxLength="11"pattern="[0-9]{10}"placeholder='+92-312-3456789'value={values.phone}
            onChange={handleChange} />
          </div>
          <button type='submit' className='btn btn-success'>Submit</button>
          <Link to='/' className='btn btn-primary ms-3'>Back</Link>
        </form>
      </div>
    </div>
  )
}

export default Create