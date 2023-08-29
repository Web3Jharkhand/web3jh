import React from 'react'
import './HomePage.css'
import OurPartners from './OurPartners'
import AboutUs from './AboutUs'
import OurTeam from './OurTeam'
import Events from './Events'
import ContactUs from './ContactUs'
import HeroSection from './HeroSection'
import Header from './Header'

const HomePage = () => {
  return (
    <div>
        <Header />
        <img src="Asset-3-2.png" alt="" className='left-top-border' />
        <HeroSection />
        <AboutUs />
        <Events />
        <div className="patterns" style={{display:"flex"}}>
            <img src="pattern 1.png" alt="" style={{width:"100%"}} />
            <img src="pattern 2.png" alt="" style={{width:"100%"}} />
            <img src="pattern 2.png" alt="" style={{width:"100%"}} />
        </div>
        <OurTeam />
        <OurPartners />
        <ContactUs />

    </div>
  )
}

export default HomePage