import {bgWrap} from '../globals.css'
import Image from 'next/image'
import heroImg from '@/app/public/hero_bg.png'

const Hero = () => {
    return(
        <div className={bgWrap}>
      <Image
        alt="bg image"
        src={heroImg}
        layout="fill"
        objectFit="cover"
        quality={100}
      />

</div>


    )
}

export default Hero;