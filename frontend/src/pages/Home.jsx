import React from 'react'
import { Link } from 'react-router-dom'
import About from '../components/About/About.jsx'
import heroImg004 from '../assets/images/img-hero-004.jpeg'
import heroImg002 from '../assets/images/hero-img-002.jpeg'
import heroImg003 from '../assets/images/hero-img-003.jpeg'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import featureImg from '../assets/images/featureImg01.jpeg'
import ServiceList from '../components/ServiceList.jsx'
import DoctorCard from '../components/DoctorCard.jsx'
import DoctorList from '../components/DoctorList.jsx'
import logo from '../assets/images/logoDog01.png'
import faqImg from '../assets/images/doctorImg003.webp'
import FaqList from '../components/FaqList.jsx'
//import Testimonial from '../components/Testimonial.jsx'

//import {BsRightArrow} from 'react-icons'


const Home = () => {
  return (
    
    <>
    {/* hero section */}
    <section className="hero__section pt-[60px] 2xl:h-[80px]">
      <div className="container ">
        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
        
        
        {/* hero content */}
        <div>
          <div className="lg:w-[570px]">
            <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md-text-[60px] md:leading-[70px]">
            Schedule a therapy session for healing moments with our canine friends.
            </h1>

            <p className="text__para">
            Discover healing through the comfort of a canine companion. Secure your therapy session now, and embark on a journey of relaxation and well-being with your furry friend by your side
            </p>

            <button className="btn">
              Meet your cannie frined now
            </button>
          </div>


          {/* hero counter */}
          <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
            <div >
              <h2 className="text-[30px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                40+
              </h2>
              <span className="w-[100px] h-2 bg-fuchsia-300 rounded-full block mt-[-30px]">
                <p className="text__para text-[20px]">
                locations
                </p>
              </span>
            </div>

            <div >
              <h2 className="text-[30px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                50+
              </h2>
              <span className="w-[100px] h-2 bg-pink-300 rounded-full block mt-[-30px]">
                <p className="text__para text-[16px]">
                therapy dogs
                </p>
              </span>
            </div>

            <div >
              <h2 className="text-[30px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                60+
              </h2>
              <span className="w-[100px] h-2 bg-rose-300 rounded-full block mt-[-30px]">
                <p className="text__para">
                experience
                </p>
              </span>
            </div>




          </div>
        </div>

        {/* hero content */}
        <div className="flex gap-[30px] justify-end">
          <div>
            <img className="w-full "src={heroImg004} alt="" />
          </div>
          
          <div className="mt-[30px]">
            <img src={heroImg002} alt="" className="h-60 w-96 mb-[30px]"/>
            <img src={heroImg003} alt="" />
          </div>
        </div>

        </div>
      </div>
    </section>
    {/* hero section end */}

    <section >
      {/* conten1 */}
      <div className="container mt-5">
        
        <div className="  lg:w-[470px] mx-auto">

          <img className="w-[200px]  mx-auto"src={logo} alt=""/>

          <h2 className="heading text-center">
          Provide comfort and support just for you
          </h2>
          <p className='text__para text-center'>
          Embark on a journey of healing and comfort as our compassionate therapy dogs provide companionship, bringing warmth and joy to your recovery.
          </p>
        </div>
      </div>
      
      {/* conten2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px]">
        <div className="py-[20px] px-5">
          
          {/* icon */}
          <div className="flex items-center justify-center">
            <img src={icon01} alt=""/>
          </div>
         
          {/* subtitle */}
          <div className="mt-[30px]">
            <h2 className="text-center font-[700]">
              Find your doctor
            </h2>
            <p className=" text-[16px] text-center">
            Our specially trained therapy dogs are here to offer unwavering support, bringing comfort and joy to brighten your path to recovery.
            </p>
          </div>

          
        </div>

        <div className="py-[20px] px-5">
          
          {/* icon */}
          <div className="flex items-center justify-center">
            <img src={icon02} alt=""/>
          </div>
         
          {/* subtitle */}
          <div className="mt-[30px]">
            <h2 className="text-center font-[700]">
              Find a Location
            </h2>
            <p className=" text-[16px] text-center">
            Allow the joyous connection with these furry friends to uplift your spirits and enhance your well-being during your path to recovery. 
            </p>
          </div>

          
        </div>

        <div className="py-[20px] px-5">
          
          {/* icon */}
          <div className="flex items-center justify-center">
            <img src={icon03} alt=""/>
          </div>
         
          {/* subtitle */}
          <div className="mt-[30px]">
            <h2 className="text-center font-[700]">
              Book an Appointment 
            </h2>
            <p className=" text-[16px] text-center">
            Let the positive energy of these furry friends be an integral part of your wellness journey, enhancing your spirit and bringing a smile to your face each day.
            </p>
          </div>

          
        </div>


      </div>
    </section>

    {/* about section start */}
    <About/>
    {/* about section end */}

    {/* services section start */}
    <section>
      <div className="container">
        
        <div className="mx-auto">
          <h2 className="heading text-center">
          Our Therapy Animals Services
          </h2>
          <p className="text-[16px] text-center mx-10 my-10">
          Our animal-assisted interactions community programs serve people of all ages in various socio-economic matters in areas of physical, occupational, speech and psychotherapies and special education. Environments and lives are transformed by sharing a distinctive, attentive and compassionate kind of healing through supportive volunteer advocates and their therapy animals to those in need.
          </p>
        </div>

        <ServiceList/>

      </div>
    </section>
    {/* services section end */}

    {/* feature section */}
     <section>
      <div className="container">
        <div className="flex items-center justify-between flex-col lg:flex-row">
          
          {/* feature content */}
          <div className="xl:w-[670px]">
            <h2 className="heading">
              Get Virtual Treatment <br /> anytime
            </h2>


            <ul className="pl-4">
              <li className="text__para">
                1. Schedule the appointment directly 
              </li>
              <li className="text__para">
                2. Search for your healthcare professionals
              </li>
              <li className="text__para">
                3.View our animal therapy for specific conditions and to ensure proper integration into a comprehensive treatment plan.
              </li>
            </ul>

            <Link to="/">
              <button className='btn'>
                Learn More
              </button>
            </Link>
          </div>

          {/* feature image */}

          <div className="relative z-10 flex justify-end mt-[50px]">
            <img src={featureImg} alt=""/>
          </div>

        </div>
      </div>
     </section>
    {/* feature section end */}
    
    {/* Our great doctor start*/}
    <section>
      <div className="container">
        <div>
          <h2 className="heading text-center">
            Our great doctors
          </h2>

          <p className="text__para text-center">
          Ease the burden of depression and anxiety through the comforting presence
          </p>
        </div>

        <DoctorList/>
      </div>
    </section>
    {/* Our great doctor end*/}

    {/* faq section start*/}
    <section>
      <div className="container ">
        <div className="flex flex-row items-start justify-evenly ">
          {/* faq img */}
          <div className="relative ">
            <img className="w-[400px] rounded-md" src={faqImg} alt=""/>
          </div>
          {/* faq  title */}
          <div className="w-full md:w-1/2 ">
            <h2 className="heading">
            Most questions by our patients
            </h2>
            {/* faq content  */}
            <FaqList />
          </div>
        </div>
        
        
      </div>
    </section>
    {/* faq section end */}

    {/* comment section start */}

    <>
    <section>
      <div className="container">
        
        <div className="mx-auto">
          <h2 className="heading text-center ">
            What our patient say
          </h2>
          <p className="text__para text-center px-10">
          From routine check-ups to specialized treatments, each visit to The Dogspital is an experience focused on the health, happiness, and tail-wagging recovery of our beloved canine companions
          </p>
        </div>
          {/* <Testimonial/> */}
      </div>
    </section>
    </>
    
    {/* comment section end */}
    







    </>
  )
}

export default Home