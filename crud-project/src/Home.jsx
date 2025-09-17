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
    <td>
       <button className='btn btn-info me-2'>Read</button>
      <button className='btn btn-primary me-2'>Edit</button>
      <button className='btn btn-danger'>Delete</button>
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