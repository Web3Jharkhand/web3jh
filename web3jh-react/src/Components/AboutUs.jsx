import React from 'react'

const AboutUs = () => {
  return (
    <div>
        <div className="about-page" style={{marginTop:"28rem"}}>
            <p className='head-about'>About Us</p>
            <div className="about-content">
                <div className="para-about">
                    <p className='para-about1'>Web3JH, initial for Web3 Jharkhand,  is a  vibrant community dedicated to  fostering the growth and adoption of decentralized technologies in the state of Jharkhand. By</p>
                    <p className='para-about2'>providing a platform for individuals in Jharkhand to connect and uplift each other, we aspire to  create  an  inclusive and   supportive  environment  where  ideas   flourish  and innovations  thrive.</p>
                </div>
                <div className="img-about-div">
                    <img src="Web3 JharkhandHomePage.png" alt="" height="481px" width="688px" className='img-about' />
                </div>
            </div>
            <div className="whole-about-content-down" >
                <div>
            <img src="DALL_E_2023-08-05_20.27 2.png" alt="" className='about-content-down-bg' />
            </div>
            <div className="about-content-down">
                
                <div className="all-aims">
                    <div className="each-aim">
                        <img src="rocket 1.png" alt="" className='each-aim-img' style={{marginLeft:"1.5rem"}} />
                        <p className='each-aim-title'>MISSION</p>
                        <p className='each-aim-desc'>Drive Web3 adoption and empower individuals through our monthly meetups, workshops, and hackathons.</p>
                    </div>
                    <div className="each-aim">
                        <img src="vision 2.png" alt="" className='each-aim-img' />
                        <p className='each-aim-title'>VISION</p>
                        <p className='each-aim-desc'>Build a thriving Web3 ecosystem that revolutionize industries, fosters innovation and start-up culture.</p>
                    </div>
                    <div className="each-aim">
                        <img src="goal 1.png" alt="" className='each-aim-img' />
                        <p className='each-aim-title' style={{marginLeft:"1rem"}}>GOAL</p>
                        <p className='each-aim-desc'>Create a supportive community that learn, build and grow together globally</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs