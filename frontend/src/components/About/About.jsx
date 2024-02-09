import React from 'react'
import aboutImg from '../../assets/images/about01.png'
const About = () => {
  return (
    <section>
        <div className="container">
            <div className="flex items-center justify-between ">
                {/* about img */}
                <div className="relative w-3/4 lg:w-1/2">
                    <img src={aboutImg} alt=""/>
                </div>

                {/* about content */}
                <div className=" lg:w-1/2 xl:w-[670px] order-1 lg:order-2 ">
                    <h2 className="heading"> 
                        Healing Paws: Your Path to Wellness
                    </h2>

                    <p className="text__para">
                    Embark on a transformative journey towards wellness with our "Healing Paws" program. Our specially trained therapy dogs are here to provide not just companionship, but a source of comfort and joy on your road to recovery. In their gentle presence, you'll discover a unique and heartening form of support that goes beyond traditional methods.
                    </p>

                    <p className="text__para mt-[30px]">
                    Step into a realm of holistic healing with our "Pawsitively Healing" program, where the comforting presence of our therapy dogs becomes an integral part of your personalized wellness plan. 
                    </p>

                    <button className="btn">
                        Learn more
                    </button>

                </div>
            </div>
        </div>
    </section>
  )
}

export default About