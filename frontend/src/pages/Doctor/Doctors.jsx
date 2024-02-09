import React from 'react'
import DoctorCard from '../../components/DoctorCard'
import { doctors } from '../../assets/data/doctors'

const Doctors = () => {
  return (
    <>
    {/* search bar: placeholder and search button */}
    <section className=" bg-pink-200 bg-opacity-15">
      <div className="container text-center">
        <h4 className="heading text-[25px]">discover the soothing power of canine companionship </h4>
        <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
          <input type="search" className="py-4 pl-4 pr-2 bg-transparet w-full  focus:outline-none cursor-pointer
           placeholder:text-textColor "
           placeholder='Search Canine Doctor'/>

           <button className="btn mt-0 rounded-[0px] rounded-r-md">Search</button>
        </div>
      </div>
    </section>

    {/* doctor list */}

    <section>
      <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3  gap-5 ">
        {doctors.map((doctor)=> <DoctorCard key={doctor.id} doctor={doctor}/>)}
    </div>
      </div>
    </section>
    
    
    
    
    </>
    
    



  )
}

export default Doctors