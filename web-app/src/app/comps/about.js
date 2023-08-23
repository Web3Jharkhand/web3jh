import {bgWrap} from '../globals.css'
import Image from 'next/image'
import jhImg from '@/app/public/jh-cultue.png'
import jhBlock from '@/app/public/jharkhand-block.png'

const About = () => {
    return(
      <div className='about-bg'> 

      <div className='p-[6rem]'>
        
        <div className='xl:w-[50rem]  xl:pb-[3rem]'><span className="xl:text-6xl font-bold text-black/60">Who Are We?</span><br /><br />
            
          </div>
          <div className='xl:text-[1.7rem] text-black'>
            <p>
            Web3JH, initial for Web3 Jharkhand, is a vibrant community dedicated to  fostering the growth and adoption of decentralized technologies in the state of Jharkhand. By providing a platform for individuals in Jharkhand to connect and uplift each other, we aspire to create  an inclusive and   supportive environment  where ideas   flourish  and innovations thrive.
                
            </p>
            
            <br />

            <p>
            Our  mission is to  establish a robust Web3  ecosystem in Jharkhand,  where 
individuals can come together to share knowledge, collaborate on projects, and 
unlock the  transformative   potential  of decentralized   technologies. Through 
education, networking opportunities, and community-driven initiatives, we aim to 
build, grow, and scale the Web3 landscape in Jharkhand.


            </p>
                
                </div>



      </div>
        
            
         
        




</div>


    )
}

export default About;