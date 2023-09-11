import Navbar from '@/components/Navbar'
import Image from 'next/image'
import AnimationSection from '@/pages/Animation'
import Link from 'next/link'
import ProjectComponent from '@/components/ProjectComponent'
import React, { useState } from 'react'

export default function Projects() {

    const projects = [
        {
        title: 'animation',
        text: 'Venture into our animation realm...',
        },
        {
        title: '3D services',
        text: 'Unlock creativity with our 3D services...',
        },
        {
            title: 'Branding & Design',
            text: 'Unlock creativity with our 3D services...',
        },
        {
            title: 'Artwork',
            text: 'Unlock creativity with our 3D services...',
        },
        // Adicione mais projetos conforme necessário
    ];

    const [activeProject, setActiveProject] = React.useState(0);

    const handleProjectChange = (index:any) => {
        setActiveProject(index);
    };


return (
    <div>
        <Navbar></Navbar>
            <div className="page-border page fixed -z-[10]"/>
            <div className="w-screen h-screen relative overflow-hidden">
            {projects.map((project, index) => (
            <div
                key={index}
                className={`w-full h-full absolute top-0 transition-transform transform 
                ${index === activeProject ? 'translate-x-0' : index < activeProject ? '-translate-x-full' : 'translate-x-full'}`}
            >
                <ProjectComponent title={project.title} text={project.text} />
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
            <button
                className={`hover:text-[#AF804B]
                ${
                    index === activeProject ? 'text-[#AF804B]' : ' text-[#979797]'
                }`}
                onClick={() => handleProjectChange(index)}
            >
                {project.title}
            </button>
            </React.Fragment>
        ))}
        </div>
    </div>

        
    </div>
    
)
}
