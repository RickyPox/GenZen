

import Navbar from '@/components/Navbar'
import Image from 'next/image'
import AnimationSection from '@/pages/Animation'
import Link from 'next/link'
import ProjectComponent from '@/components/ProjectComponent'

export default function Projects() {
return (
    <div>
        <div className="page-border page fixed -z-[10]"/>
        <Navbar></Navbar>
        <ProjectComponent></ProjectComponent>
    </div>
    
)
}
