import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function LoginUser(event) {
    event.preventDefault()
    const response = await fetch('http://localhost:1500/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })

    const data = await response.json()
    if(data.user) {
      alert('Login Successful')
      window.location.href='/'
    }else {
      alert('Please check your username and password')
      window.location.href='/login'
    }
    console.log(data)
  }
  

  return (
    <div className='relative w-auto h-screen'>
      <Navbar/>
      <form onSubmit={LoginUser} className='max-w-[400px] w-30 mx-auto bg-white p-8'>
        <h1 className='text-4xl font-bold text-center py-8'>Login</h1>
        <input
          className='border relative bg-gray-100 p-2 w-full'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder='Email'
          required
        />

        <input
          className='border relative bg-gray-100 p-2 mt-4 w-full'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder='Password'
          required
        />
        <input type='submit' value="Register" className='w-full py-3 mt-8 bg-green-600 hover:bg-gray-500 relative text-white mb-4' />
        <Link to="/signup" className='text-black hover:text-green-500'>
          No Account Yet? Signup Here
        </Link>
      </form>
    </div>
  )
}

export default Login