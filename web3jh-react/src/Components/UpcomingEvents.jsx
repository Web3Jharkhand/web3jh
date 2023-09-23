 import React from 'react'
 
 const UpcomingEvents = () => {
   return (
     <div>
        <div className="upcoming-events">
            <p className='head-upco-events'>UPCOMING EVENTS</p>
            <div className="all-upco-events">
                <div className="each-upco-events">
                    <div className="each-upco-events-img">
                        <img src="Start with Solana Aryan-3.png" alt="" className="each-event-img" />
                    </div>
                    <div className="each-upco-events-content">
                        <p className='each-event-name'>Start with Solana</p>
                        
                        <p className='each-event-details'>BIT Mesra</p>
                        <p className='each-event-details'>10th September, 2023</p>
                        <p className='each-event-details'>10:00 AM - 2:00 PM</p>
                        <p className="each-event-details">Informative, educational programming workshop around Web3, DeFi, NFTs, and how to get started on Solana with exclusive SWAGs and Pizzas for everyone! 🍕</p>

                        <div className="btn-upco-events">
                        <a href="https://lu.ma/SolanaxBITSMesraS2" style={{textDecoration:"none"}}><div className="reg-events">
                            <p className='reg-events-para'>Register Now</p>
                        </div></a>
                        <div className="reg-events-icon">
                           <a href="https://lu.ma/SolanaxBITMesra"><img src="Linking (1).png" alt=""  /></a> 
                        </div>
                    </div>
                        
                    </div>
                    

                </div>
            </div>
        </div>
     </div>
   )
 }
 
 export default UpcomingEvents