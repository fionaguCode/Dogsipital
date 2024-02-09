import React from 'react'
import logo from '../assets/images/logoDog01.png'
import {Link} from 'react-router-dom'
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'

const socialLinks =[
  {
    path: "https://www.instagram.com/fifiii53/",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5"/>,
  },
  {
    path: "https://github.com/fionaguCode",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5"/>,
  },
 
]

const quickLinks01 = [
  {
    path:"/home",
    display:"Home",

  },
  {
    path:"/",
    display:"About Us",

  },
  {
    path:"/services",
    display:"Services",

  },
  {
    path:"/",
    display:"Blog",

  },


]

 



const Footer = () => {


  const year = new Date().getFullYear();
  return (
    <div>
      <footer className=" footer pb-16 pt-10">
        <div className="container">
         <div className="flex justify-around flew-col flew-wrap gap-[30px]">
            <div className="flex justify-between flex-col">
              <img className="w-[100px]"src={logo} alt="" />
              <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
                {year} Developed by Fanghua Gu
              </p>
              <div className="flex items-center gap-3 mt-4">
                {socialLinks.map((link, index)=> (
                  <Link to={link.path} key={index} className="w-9 h-9 border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                    {link.icon}
                  </Link>
                ))}

              </div>
            </div>

            <div>
              <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">Quick Links</h2>
              <ul>
                {quickLinks01.map((item, index) => (
                  <li key={index} className="mb-4">
                    <Link to={item.path}>{item.display}</Link>
                  </li>
                ))}

              </ul>
            </div>

          

            
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer