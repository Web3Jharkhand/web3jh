import React from 'react'
import Slideshow from './Slideshow';

const images6 = [
    'Blockmeet-6-0.jpeg',
    'Blockmeet-6-1.jpg',
    'Blockmeet-6-2.jpg',
    'Blockmeet-6-3.jpg',
    'Blockmeet-6-4.jpg',
    'Blockmeet-6-5.jpg',
    'Blockmeet-6-6.jpg',
    'Blockmeet-6-7.jpg',
    'Blockmeet-6-8.jpg',
    'Blockmeet-6-9.jpg',
]

const images5 = [
    'Blockmeet-5-1.jpg',
    'Blockmeet-5-2.jpg',
    'Blockmeet-5-3.jpg',
    'Blockmeet-5-4.jpg',
    'Blockmeet-5-5.jpg',
    'Blockmeet-5-6.jpg',
    'Blockmeet-5-7.jpg',
    'Blockmeet-5-8.jpg',
]

const images4 = [
    'Blockmeet-4-1.jpg',
    'Blockmeet-4-1.jpg',
    'Blockmeet-4-2.jpg',
    'Blockmeet-4-3.jpg',
    'Blockmeet-4-4.jpg',
    'Blockmeet-4-5.jpg',
    'Blockmeet-4-6.jpg',
    'Blockmeet-4-7.jpg',
    'Blockmeet-4-8.jpg',
    'Blockmeet-4-9.jpg',
    'Blockmeet-4-10.jpg',
    'Blockmeet-4-11.jpg',
]

const images3 = [
    'Blockmeet-3-1.jpg',
    'Blockmeet-3-2.jpg',
    'Blockmeet-3-3.jpg',
    'Blockmeet-3-4.jpg',
    'Blockmeet-3-5.jpg',
    'Blockmeet-3-6.jpg',
]

const imgshardeum = [
    'Shardeum-1-1.jpg',
    'Shardeum-1-2.jpg',
    'Shardeum-1-3.jpg',
    'Shardeum-1-4.jpg',
    'Shardeum-1-5.jpg',
    'Shardeum-1-6.jpg',
    'Shardeum-1-7.jpg',
    'Shardeum-1-8.jpg',
    'Shardeum-1-9.jpg',
    'Shardeum-1-10.jpg',
    'Shardeum-1-11.jpg',
    'Shardeum-1-12.jpg',
    'Shardeum-1-13.jpg',
    'Shardeum-1-14.jpg',
]

const PastEvents = () => {
  return (
    <div>
        <div className="past-events" style={{marginTop:"18rem"}}>
            <p className='head-past-events'>PAST EVENTS</p>
            <div className="all-past-events">
                <div className="each-past-events">
                    <div className="each-past-events-div">
                       
                        <Slideshow className="each-slide"  images={images6} alt="" />
                    </div>
                    <div className="each-upco-events-content">
                        <p className='each-event-past-name'>Blockmeet Ranchi - 6th Edition</p>
                        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"-1rem"}}>
                        <div>
                        <p className='each-event-past-details'><img src="location.png" alt="" className='event-calendar-past-img' />CAT Hall, BIT Mesra</p>
                        <p className='each-event-past-details'><img src="calendar.png" alt="" className='event-calendar-past-img' />26th August, 2023</p>
                        </div>
                        <div>
                        <p className='each-event-past-registered'><img src="profile-user.png" alt="" className='event-member-past-img' />250+</p>
                        </div>
                        </div>
                    </div>
                    

                </div>

                <div className="each-past-events">
                    <div className="each-past-events-div">
                        {/* <div className="each-past-event-img"></div> */}
                        <Slideshow className="each-slide"  images={images5} alt="" />
                    </div>
                    <div className="each-upco-events-content">
                        <p className='each-event-past-name'>Blockmeet Ranchi - 5th Edition</p>
                        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"-1rem"}}>
                        <div>
                        <p className='each-event-past-details'><img src="location.png" alt="" className='event-calendar-past-img' />HnC, BIT Mesra</p>
                        <p className='each-event-past-details'><img src="calendar.png" alt="" className='event-calendar-past-img' />24th June, 2023</p>
                        </div>
                        <div>
                        <p className='each-event-past-registered'><img src="profile-user.png" alt="" className='event-member-past-img' />50+</p>
                        </div>
                        </div>
                    </div>
                    

                </div>

                <div className="each-past-events">
                    <div className="each-past-events-div">
                        <Slideshow className="each-slide"  images={imgshardeum} alt="" />   
                        {/* <div className="each-past-event-img"></div> */}
                    </div>
                    <div className="each-upco-events-content">
                        <p className='each-event-past-name'>Shardeum Proof of Community Meetup</p>
                        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"-1rem"}}>
                        <div>
                        <p className='each-event-past-details'><img src="location.png" alt="" className='event-calendar-past-img' />NIAMT Ranchi</p>
                        <p className='each-event-past-details'><img src="calendar.png" alt="" className='event-calendar-past-img' />14th May, 2023</p>
                        </div>
                        <div>
                        <p className='each-event-past-registered'><img src="profile-user.png" alt="" className='event-member-past-img' />200+</p>
                        </div>
                        </div>
                    </div>
                    

                </div>

                <div className="each-past-events">
                    <div className="each-past-events-div">
                        
                    <Slideshow className="each-slide"  images={images4} alt="" />
                    </div>
                    <div className="each-upco-events-content">
                        <p className='each-event-past-name'>Blockmeet Ranchi - 4th Edition</p>
                        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"-1rem"}}>
                        <div>
                        <p className='each-event-past-details'><img src="location.png" alt="" className='event-calendar-past-img' />IIIT Ranchi</p>
                        <p className='each-event-past-details'><img src="calendar.png" alt="" className='event-calendar-past-img' />15th April, 2023</p>
                        </div>
                        <div>
                        <p className='each-event-past-registered'><img src="profile-user.png" alt="" className='event-member-past-img' />150+</p>
                        </div>
                        </div>
                    </div>
                    

                </div>

                <div className="each-past-events">
                    <div className="each-past-events-div">
                        
                    <Slideshow className="each-slide"  images={images3} alt="" />
                    </div>
                    <div className="each-upco-events-content">
                        <p className='each-event-past-name'>Blockmeet Ranchi - 3rd Edition</p>
                        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"-1rem"}}>
                        <div>
                        <p className='each-event-past-details'><img src="location.png" alt="" className='event-calendar-past-img' />IIIT Ranchi</p>
                        <p className='each-event-past-details'><img src="calendar.png" alt="" className='event-calendar-past-img' />18th March, 2023</p>
                        </div>
                        <div>
                        <p className='each-event-past-registered'><img src="profile-user.png" alt="" className='event-member-past-img' />40+</p>
                        </div>
                        </div>
                    </div>
                    

                </div>

                <div className="each-past-events">
                    <div className="each-past-events-div">
                        
                        <img className="each-past-event-img" src="Blockmeet-2-1.jpg" alt="" />
                    </div>
                    <div className="each-upco-events-content">
                        <p className='each-event-past-name'>Blockmeet Ranchi - 2nd Edition</p>
                        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"-1rem"}}>
                        <div>
                        <p className='each-event-past-details'><img src="location.png" alt="" className='event-calendar-past-img' />Krishna Inn Hotel</p>
                        <p className='each-event-past-details'><img src="calendar.png" alt="" className='event-calendar-past-img' />18th Feb, 2023</p>
                        </div>
                        <div>
                        <p className='each-event-past-registered'><img src="profile-user.png" alt="" className='event-member-past-img' />10+</p>
                        </div>
                        </div>
                    </div>
                    

                </div>

                <div className="each-past-events">
                    <div className="each-past-events-div">
                        
                        <img className="each-past-event-img" src="Blockmeet-1-1.png" alt="" />
                    </div>
                    <div className="each-upco-events-content">
                        <p className='each-event-past-name'>Blockmeet Ranchi - 1st Edition</p>
                        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"-1rem"}}>
                        <div>
                        <p className='each-event-past-details'><img src="location.png" alt="" className='event-calendar-past-img' />CAT Hall, BIT Mesra</p>
                        <p className='each-event-past-details'><img src="calendar.png" alt="" className='event-calendar-past-img' />21st Jan, 2023</p>
                        </div>
                        <div>
                        <p className='each-event-past-registered'><img src="profile-user.png" alt="" className='event-member-past-img' />20+</p>
                        </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
    </div>
  )
}

export default PastEvents