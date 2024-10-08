import React, {useState} from 'react';
import { IoEye, IoEyeOff } from "react-icons/io5";
import {Link} from "react-router-dom"
import OrAuth from '../components/OrAuth';


export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] = useState({
        name:"",
        email: "",
        password: ""
  })
  const {name, email, password} = formData; // destructuring formData

  function onChange(e){    
    setFormData((prevState)=>({
      ...prevState, 
        [e.target.id]: e.target.value
    }))
  }

  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign Up</h1>

      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="key img" className='w-full rounded-2xl'/>
        </div>


        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form>
            <input type="text" id='name' value={name} onChange={onChange} placeholder='Full name' 
                className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6' />

            <input type="email" id='email' value={email} onChange={onChange} placeholder='Email adress' 
              className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6' />
          

            <div className='relative mb-6'>
              <input type={showPassword ? "text" : "password"} id='password' value={password} onChange={onChange} placeholder='Password' 
                className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' />
              {showPassword ? (<IoEye className='absolute right-3 top-3 text-xl cursor-pointer' onClick={()=>setShowPassword((prevState)=>!prevState )} />)
              : (<IoEyeOff className='absolute right-3 top-3 text-xl cursor-pointer' onClick={()=>setShowPassword((prevState)=>!prevState )} />)}
            </div>

            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
              <p className='mb-6'>Have an account? <Link to="/sign-in" className='text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1'>Sign In</Link></p>
              <p><Link to="/forgot-password" className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out ml-1'>Forgot Password?</Link></p>
            </div>

            <button type="submit" className='w-full bg-blue-600 text-white px-7 py-3 text-small font-medium uppercase rounded-md shadow-md hover:bg-blue-700 transition duration-100 ease-in-out hover:shadow-xl active:bg-blue-800'>Sign Up</button>
          
            <div className='flex items-center my-4 before:border-t-4 before:flex-1 before:border-gray-300     after:border-t-[3px] after:flex-1 after:border-gray-300'>
              <p className='text-center font-semibold mx-4'>OR</p>
            </div>

            <OrAuth />
          </form>
          
        </div>
      </div>
    </section>
  )
}
