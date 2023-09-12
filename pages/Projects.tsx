import Navbar from '@/components/Navbar'
import ProjectComponent from '@/components/ProjectComponent'
import React, {useRef} from 'react'
import {Link} from "react-scroll"


export default function Projects() {

    const projects = [
        {
        title: 'animation',
        text: 'Venture into our animation realm, where ideas take on vibrant narratives through captivating visuals. Unveil our portfolio for a visual storytelling odyssey.',
        id:"Animation",
        href:"Animation",
        },
        {
        title: '3D services',
        text: 'Unlock creativity with our 3D services. From building unique characters, environments and a wide variety of 3D models, let your imagination run wild.',
        id:"3Dservices",
        href:"3Dservices",
        },
        {
            title: 'Branding & Design',
            text: 'Explore our branding and design portfolio, a testament to our skill in turning brand visions into impactful designs.',
            id:"Branding&Desing",
            href:"Branding&Design",
        },
        {
            title: 'Artwork',
            text: 'A Glimpse of Imagination. Our collection of artworks that span different styles and emotions, inviting you to connect with creativity.',
            id:"Artwork",
            href:"Artwork"
        },
        // Add More projects
    ];


return (
    <div>
        <Navbar></Navbar>
            <div className="page-border page fixed -z-[10]"/>
            <div>
            {projects.map((project, index) => (
            <div
                key={index}
                id={project.id}
                
            >
                <ProjectComponent title={project.title} text={project.text} href={project.href}  />
            </div>
            ))}
        </div>

            <div className="hidden md:flex justify-center">
        <div className="fixed bottom-[10%]  inline-flex items-center justify-center projectSections bg-black z-[] ">
        {projects.map((project, index) => (
            <React.Fragment key={index}>
            {index > 0 && (
                <img
                className="w-[2%] ml-[10px] mr-[10px]"
                src="/projects/ProjectsSectionsDivider.png"
                alt="Divider"
                />
            )}
            <Link
                to={project.id}
                smooth={true}
                duration={500} 
                className={`hover:text-[#AF804B] text-[#979797]`}>
                {project.title}
            </Link>
            </React.Fragment>
        ))}
        </div>
    </div>

        
    </div>
    
)
}
