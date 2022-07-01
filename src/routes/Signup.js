import React from 'react'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar'

const Signup = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [location, setLocation] = useState('')

  async function registerUser(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:1500/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        location,
      }),
    })

    const data = await response.json()

    if (data.status === 'ok') {
      navigate('/login')
    }

  }

  return (
    <div className='relative w-auto h-screen'>
      <Navbar/>
      <form onSubmit={registerUser} className='max-w-[400px] w-30 mx-auto bg-white p-8'>
        <h1 className='text-4xl font-bold text-center py-8'>Sign Up Now</h1>
        <input
          className='border relative bg-gray-100 p-2 mb-4 w-full'
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder='Name'
        />

        <input
          className='border relative bg-gray-100 p-2 mb-4 w-full'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder='Email'
          required
        />

        <input
          className='border relative bg-gray-100 p-2 mb-4 w-full'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder='Password'
          required
        />

        <input
          className='border relative bg-gray-100 p-2 w-full'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          placeholder='Current Location'
          required
        />
        <input type='submit' value="Register" className='w-full py-3 mt-8 bg-green-600 hover:bg-gray-500 relative text-white mb-4'/>
        <Link to="/login"  className='text-black hover:text-green-500'>
          Already have an account? Login Here
        </Link>
      </form>
    </div>
  )
}

export default Signup