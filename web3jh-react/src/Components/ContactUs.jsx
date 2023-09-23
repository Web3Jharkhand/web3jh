import React from 'react'

const ContactUs = () => {
  return (
    <div className='ContactUs-page'>
        <p className='head-ContactUs'>Contact Us</p>
        <div className="both-ContactUs">
        <div className="left-ContactUs">

            <p className='get-in-touch'>Get in Touch</p>
            <p className='email-contactUs'>web3jh@gmail.com</p>

        </div>

        <div className="right-ContactUs">
            <p className='head-socials'>Socials</p>
            <div className="socials-icons-ContactUs">
             
                <a href="https://www.instagram.com/web3jh/" target='_blank'><img src="instagram 1.png" alt="" /></a>
                <a href="https://www.linkedin.com/company/web3jh/" target='_blank'><img src="image 8.png" alt="" /></a>
                <a href="https://twitter.com/web3jh" target='_blank'><img src="twitter 5 (1).png" alt="" /></a>
            </div>
            
        </div>
        </div>
        <div className="contactUs-down" style={{display:"flex"}}>
            <div className="div-logo-contactUsDown">
                <img src="Web3JH_Logo_White-no-bg 2.png" alt="" className='img-logo-contactUsDown' />

            </div>
            <div className="content-logo-contactUsDown">
                <p className="para-logo-contactUsDown">© 2023 WEB3JH</p>
            </div>
        </div>
    </div>
  )
}

export default ContactUs