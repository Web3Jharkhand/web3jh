import React from 'react'
import UpcomingEvents from './UpcomingEvents'
import PastEvents from './PastEvents'

const Events = () => {
  return (
    <div>
        <div className="events-page" style={{marginTop:"10rem"}}>
        <p className='head-events'>EVENTS</p>
        <UpcomingEvents />
        <PastEvents />
        </div>
    </div>
  )
}

export default Events