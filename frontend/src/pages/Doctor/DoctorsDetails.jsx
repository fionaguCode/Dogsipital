import React, { useState } from 'react'
import doctorImg from '../../assets/images/doctorImg001.jpeg'
import starIcon from '../../assets/images/Star.png'
import DoctorAbout from './DoctorAbout';

const DoctorsDetails = () => {

  const [tab, setTab] = useState("About");
  

  return (
    <section>
      <div>
        <div>
          <div>
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px] pl-10">
                <img src={doctorImg} alt="" className="w-full"/>
              </figure>

              <div>
                <span className="bg-[#ccf0f3] text-irisBlueColor py-1 px-6 text-[12px] leading-4 font-semibold rounded">
                Stress Management
                </span>

                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">Dr.Hope</h3>
                
                <div className="flex item-center justify-start gap-6">
                  <span className="flex text-headingColor item-center gap-6 text-[14px] leading-5 font-semibold">
                    <img src={starIcon} alt="" /> 4.8
                  </span>
                  <span className="flex text-textColor item-center gap-6 text-[14px] leading-5 font-semibold">
                     (272)
                  </span>
                </div>

                <p className="text__para text-[14px] w-[200px] leading-6">Experience healing through the companionship of our therapy dogs—gentle support, joy, and comfort tailored just for you.</p>
              </div>
            </div>

            <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
              <button 
                onClick={() => setTab('About')}
                className={`${tab === "About" && 'border-solid border-primaryColor'} px-10 py-2 mr-5 text-[16px] leading-7 text-textColor`}>
                About
              </button>

              {/* <button 
                onClick={() => setTab('Feedback')}
                className={`${tab === "Feedback" && 'border-solid border-primaryColor'} px-10 py-2 mr-5 text-[16px] leading-7 text-textColor`}>
                Feedback
              </button> */}
            </div>

            <div className="mt-[50px] pl-10">
              <DoctorAbout/>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default DoctorsDetails