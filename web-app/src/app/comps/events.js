import {bgWrap} from '../globals.css'
import Image from 'next/image'
import jhImg from '@/app/public/jh-cultue.png'
import jhBlock from '@/app/public/jharkhand-block.png'
import EventCard from './event-card'


const About = () => {

    const Events = {
    0:{'img' : 'link1', 'title': 'title1', 'loc': 'loc1', 'date': 'date1', 'time': 'time1', 'desc': 'desc1'}, 
    }



    return(
      <div className='events-bg'> 

      <div className='p-[6rem]'>
        
      <div className='xl:w-[50rem]  xl:pb-[3rem]'><span className="xl:text-6xl font-bold text-black/60">Events</span><br /><br />
            
          </div>

          <EventCard {...Events} />



          



      </div>
        
            
         
        




</div>


    )
}

export default About;