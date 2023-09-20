

import Navbar from '@/components/Navbar'
import Image from 'next/image'
import AnimationSection from '@/pages/Animation'
import Link from 'next/link'

export default function ProjectComponent(props:any) {

    const href = props.href || "#";
return (
    <div className='relative'> 
        <div className='flex md:items-center items-end h-screen md:p-0 pb-[25%]'>
            <div className='md:w-1/2 md:pl-[90px] md:pr-[0px] px-[50px]'>
                <img className='md:w-[100%] w-[50%] min-w-[200px]' src={`/projects/${props.title}/${props.title}Title.png`} alt="Title"></img>
                <p className='projectText my-[40px] text-justify'>{props.text}</p>
                <Link href={href} className='inline-block'>
                    <img src='/Scroll_Icon.png' className='-rotate-90 md:w-[100%] w-[70%]' alt="ScrollIcon"></img>
                </Link>
            </div>
        </div>

{/* ABSOLUTE POSITIONS HERO SECTION // MENU */}
        <img className='w-[70%] absolute top-[50%] -translate-y-[100%] md:-translate-y-[50%] md:m-0 m-auto md:right-0 md:left-auto left-0 -z-[20] ' 
            src={`/projects/${props.title}/${props.title}Char.png`} alt="Hero"/>
    </div>
    
)
}
