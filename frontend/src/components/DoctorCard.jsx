/* eslint-disable react/prop-types */
import React from 'react'
import starIcon from '../assets/images/Star.png'
import {Link} from "react-router-dom"
import {BsArrowRight} from "react-icons/bs"


const DoctorCard = ({doctor}) => {

    const {name, avgRating, totalRating, photo, specialization, totalPatients, hospital} = doctor
  
    return (
    <div>
        <div>
            <img className="mx-auto my-10 rounded-[50px]"src={photo} alt=""/>
        </div>

        <h2 className="pl-20 flex justify-start text-[18px] leading-[30px] text-headingColor font-[700]">
            {name}
        </h2>

        <div className="flex flex-row mt-2 items-center justify-center ">
            <span className="bg-[#CCF0F3] text-irisBlueColor py-3 px-3 leading-4 font-semibold text-headingColor rounded">
            {specialization}
            </span>

            <div className="flex items-center gap-[6px] justify-between">
                <span className="flex items-center gap-[6px] text-[14px] leading-7 font-semibold text-headingColor rounded ">
                    <img src={starIcon} alt="" /> {avgRating}
                </span> 
                <span className="flex items-center gap-[6px] text-[14px] leading-7 font-semibold text-headingColor">
                   ( {totalRating} )
                </span>
            </div>
        </div>

        <div className="flex items-center pl-20 mt-5">
            <div>
                <h3 className="text-[15px] leading-7 font-semibold text-headingColor">+{totalPatients} patients</h3>
                <p className="text-[14px] leading-7  text-textColor">
                    At {hospital}
                </p>
            </div>

            <Link to="/doctor" className="w-[44px] h-[44px] rounded-full border border-soild mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                <BsArrowRight className="group-hover:text-white w-6 h-6"/>
            </Link>
        </div>

        
    </div>
  )
}

export default DoctorCard