import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Login = () => {

  const [formData, setFormData] = useState({
    email:' ',
    password:''
  })

  const handleInputChange = e => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }
  return (
    <section>
      <div className="w-full max-w-[570px] mx-auto rounded shadow-2xl md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">Hello
          <span className="text-primaryColor">
            Welcome
          </span>Back
        </h3>

        <form >
          <div className="mb-5">
            <input 
            type="email" 
            placeholder='Enter your email' 
            name="email" 
            value={formData.email} 
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded cursor-pointer"
            required
            />
          </div>

          <div className="mb-5">
            <input 
            type="password" 
            placeholder='Enter your password' 
            name="password" 
            value={formData.password} 
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded cursor-pointer"
            required
            />

          </div>

          <div className="mt-7">
            <button className=" px-4 py-3 w-full leading-[30px] bg-primaryColor text-[18px] text-white rounded"type="submit">Login</button>
          </div>

          <p className="mt-5 text-textColor text-center">
            have an account? <Link to='/register' className="text-primaryColor">Register</Link>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Login