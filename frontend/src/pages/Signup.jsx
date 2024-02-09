import React from 'react'
import signupImg from '../assets/images/signup.gif'
const Signup = () => {
  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* img box */}
          <div className="bg-primaryColor hidden lg:block rounded">
            <figure className="rounded-l-lg">
              <img src={signupImg} alt=""  className="w-full rounded-l-lg"/>
            </figure>
          </div>

          {/* sign up form */}
          <div className="rounded-l-lg py-10 px-10 ">
            <h3 className="text-headingColor font-bold text-[22px] mb-10">
              Create an <span className="text-primaryColor"> account</span>
            </h3>
            <form >
              <div className="mb-5">
                <input 
                type="text" 
                placeholder='Full Name' 
                name="name" 
                value="" 
                className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded cursor-pointer"
                required
                />
              </div>
              <div className="mb-5">
                <input 
                type="email" 
                placeholder='Enter your email' 
                name="email" 
                value="" 
                className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded cursor-pointer"
                required
                />
              </div>
              <div className="mb-5">
                <input 
                type="password" 
                placeholder='Enter your password' 
                name="password" 
                value="" 
                className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded cursor-pointer"
                required
                />
              </div>

              <div>
                <label htmlFor=""></label>
              </div>

              <div className="mt-7">
                <button className=" px-4 py-3 w-full leading-[30px] bg-primaryColor text-[18px] text-white rounded"type="submit">Register</button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Signup