import Image from 'next/image'
import Nav from '@/app/comps/nav'
import Hero from '@/app/comps/hero'

import About from '@/app/comps/about'

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />

    </div>
  )
}
