import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Create from './Create'


function Home() {
  const [data, setData] =useState([])
useEffect(() => {
  axios.get('http://localhost:3000/users')
      .then((res) => {
        console.log(res.data);
         setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
}, []);  

const handleDelete = (id) => {
  const confirm = window.confirm('Are you sure you want to delete this user?')
  if (confirm){
    axios.delete('http://localhost:3000/users/'+id)
      .then((res) => {    
        alert('User Deleted Successfully')
        window.location.reload()
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

  return (

<div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
  <h1>List of Users</h1>
  <div className='w-75 rounded bg-white border shadow p-4'>
  <Link to='/create'className='btn btn-success'>Add+</Link>
  




{/* display on top of table */}
 <table className='table table-striped'>
    <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>  
      <th>phone</th>
      <th>Actions</th>
    </tr>
    </thead>
{/* display the main data  */}
<tbody>
{data.map((item) => (
  <tr key={item.id}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td className='text-nowrap'>
      <Link to={`/read/${item.id}`}>
        <button className='btn btn-info btn-sm me-2'>Details</button>
      </Link>
      <Link to={`/update/${item.id}`}>
        <button className='btn btn-primary btn-sm me-2'>Edit</button>
      </Link>
      <button className='btn btn-danger btn-sm' onClick={() => handleDelete(item.id)}>Delete</button>
    </td>
  </tr>
))}
</tbody>


   </table>
  </div>
</div>


    
  )
}

export default Home