import {bgWrap} from '../globals.css'
import Image from 'next/image'
import heroImg from '@/app/public/hero_bg.png'
import jhBlock from '@/app/public/jharkhand-block.png'

const Hero = () => {
    return(
      <div>
        <div className={bgWrap}>
          <Image
            alt="bg image"
            src={heroImg}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="relative flex xl:flex-row flex-col-reverse items-center justify-center h-[100vh]">
        <div className="xl:flex  xl:basis-1/2 ">
            <div className='xl:w-[50rem] pt-[12rem] text-center'><span className="xl:text-5xl font-bold text-black"><span className='text-red-600'>EMPOWERING</span> JHARKHAND THROUGH <span className='text-green-600'>WEB3.0</span> INNOVATION</span><br /><br />
            <span className='xl:text-[1.7rem] text-black'>&#40; the Next Generation of Internet &#41;</span>
          </div>
          <div className="xl:flex  xl:basis-1/2 ">
            <div className='w-[25rem] xl:w-[35rem]'><Image alt="Jh Block Image" src={jhBlock} />
          </div>
          

          </div>
        </div>
        </div>
        




</div>


    )
}

export default Hero;