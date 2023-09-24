import React from 'react'

const HeroSection = () => {
  return (
    <div className='HeroSection-page'>
        <img src="Asset 1 2.png" alt="" style={{zIndex:"-1",width:"100%"}} />
        <div className="main-hero">
            <p className='left-hero-p1'>EMPOWERING</p>
            <p className='left-hero-p2'>JHARKHAND THROUGH</p>
            <p className='left-hero-p3'><span style={{color:"#01A66F"}}>WEB3 </span> INNOVATION</p>
            <p className='left-hero-p4'>(a decentralized ecosystem)</p>
            
            <div className='join-us-btn'>
            <a href="https://chat.whatsapp.com/K5IjdkhJDA97wVlKo6MDIF" target='_blank' style={{textDecoration:"none"}}> <p>Join Us</p></a>
            </div>
        </div> 
        
        <div className='join-us-linking-button>'>
          <img src="Linking (1).png" alt="Linking button" className='join-us-linking-img' />
        </div>
        
    </div>
  )
}

export default HeroSection