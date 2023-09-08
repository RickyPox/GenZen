

import Navbar from '@/components/Navbar'
import Image from 'next/image'
import AnimationSection from '@/components/AnimationSection'
import Link from 'next/link'

export default function Projects() {
return (
    <div className='page relative'>
        {/* <Navbar></Navbar> */}
        <img className='w-[76%] absolute top-[50%] -translate-y-[50%] right-0  -z-[10]' src="/projects/AnimationChar.png" alt="Hero"/>
        
        <div className='flex items-center h-full'>
            <div className='md:w-1/2 pl-[90px]'>
                <img className='w-[100%] min-w-[200px]' src="/projects/AnimationTitle.png" alt="Title"></img>
                <p className='projectText'>Venture into our animation realm, where ideas take on vibrant narratives through captivating visuals. Unveil our portfolio for a visual storytelling odyssey.</p>
            </div>
        </div>
        <div className='flex justify-center'>
            <div className='absolute bottom-[10%] px-[30px] inline-flex items-center space-x-[30px] projectSections bg-black '>
                <Link className='hover:text-[#AF804B] ' href="#">
                    Animation
                </Link>
                <img className='w-[2%]' src="/projects/ProjectsSectionsDivider.png" alt=""></img>
                <Link className='hover:text-[#AF804B] py-[30px]' href="#">
                    3D Services
                </Link>
                <img className='w-[2%]'  src="/projects/ProjectsSectionsDivider.png" alt=""></img>
                <Link className='hover:text-[#AF804B] py-[30px]' href="#">
                    Branding & Design
                </Link>
                <img className='w-[2%]'  src="/projects/ProjectsSectionsDivider.png" alt=""></img>
                <Link className='hover:text-[#AF804B] py-[30px]' href="#">
                    Artwork
                </Link>
            </div>
        </div>
    </div>
    
)
}
