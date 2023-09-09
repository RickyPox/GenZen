

import Navbar from '@/components/Navbar'
import Image from 'next/image'
import AnimationSection from '@/pages/Animation'
import Link from 'next/link'

export default function ProjectComponent() {
return (
    <div>
        
        <div className='flex items-center h-screen'>
            <div className='md:w-1/2 pl-[90px]'>
                <img className='w-[100%] min-w-[200px]' src="/projects/AnimationTitle.png" alt="Title"></img>
                <p className='projectText my-[40px]'>Venture into our animation realm, where ideas take on vibrant narratives through captivating visuals. Unveil our portfolio for a visual storytelling odyssey.</p>
                <img src='/Scroll_Icon.png' className='-rotate-90' alt="ScrollIcon"></img>
            </div>
        </div>

{/* ABSOLUTE POSITIONS HERO SECTION // MENU */}
        <img className='w-[76%] absolute top-[50%] -translate-y-[50%] right-0  -z-[20]' src="/projects/AnimationChar.png" alt="Hero"/>
        <div className='flex justify-center'>
            <div className='absolute bottom-[10%]  inline-flex items-center projectSections bg-black '>
                <Link className='hover:text-[#AF804B] ' href="#">
                    Animation
                </Link>
                <img className='w-[2%]' src="/projects/ProjectsSectionsDivider.png" alt=""></img>
                <Link className='hover:text-[#AF804B] ' href="#">
                    3D Services
                </Link>
                <img className='w-[2%]'  src="/projects/ProjectsSectionsDivider.png" alt=""></img>
                <Link className='hover:text-[#AF804B] ' href="#">
                    Branding & Design
                </Link>
                <img className='w-[2%]'  src="/projects/ProjectsSectionsDivider.png" alt=""></img>
                <Link className='hover:text-[#AF804B] ' href="#">
                    Artwork
                </Link>
            </div>
        </div>
    </div>
    
)
}
