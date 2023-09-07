

import Navbar from '@/components/Navbar'
import Image from 'next/image'
import AnimationSection from '@/components/AnimationSection'

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='overflow-x-hidden'>
        <AnimationSection></AnimationSection>

      </div>
    </div>
    
  )
}
