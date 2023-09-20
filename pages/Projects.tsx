    import React, { useEffect, useState } from "react";
    import { Link as ScrollLink, Element } from "react-scroll";
    import Navbar from "@/components/Navbar";
    import ProjectComponent from "@/components/ProjectComponent";

    export default function Projects() {
    const projects = [
    {
    title: "Animation",
    text: "Venture into our animation realm, where ideas take on vibrant narratives through captivating visuals. Unveil our portfolio for a visual storytelling odyssey.",
    id: "animation",
    href: "Animation",
    },
    {
    title: "3D services",
    text: "Unlock creativity with our 3D services. From building unique characters, environments and a wide variety of 3D models, let your imagination run wild.",
    id: "services3D",
    href: "3DServices",
    },
    {
    title: "Branding & Design",
    text: "Explore our branding and design portfolio, a testament to our skill in turning brand visions into impactful designs.",
    id: "branding&Desing",
    href: "Branding&Design",
    },
    {
    title: "Artwork",
    text: "A Glimpse of Imagination. Our collection of artworks that span different styles and emotions, inviting you to connect with creativity.",
    id: "artwork",
    href: "Artwork",
    },
    // Add More projects
    ];

    const [activeSection, setActiveSection] = useState<string | null>(projects[0].id);

    useEffect(() => {
    const handleScroll = () => {
        // Loop through the projects and determine which one is currently in view
        for (const project of projects) {
        const section = document.getElementById(project.id);
        if (section) {
            const rect = section.getBoundingClientRect();
            const sectionHeight = section.clientHeight; // Height of the section

            // Check if at least half of the section is visible in the viewport
        if (rect.top <= sectionHeight / 2 && rect.bottom >= sectionHeight / 2) {
            setActiveSection(project.id);
            break;
            }
        }
        }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
        window.removeEventListener("scroll", handleScroll);
        
    };
    }, []);

    return (
    <div>
    <Navbar />
    <div className="page-border page fixed -z-[10]" />

    {projects.map((project, index) => (
    <Element key={index} name={project.id}>
        <section id={project.id} >
        <ProjectComponent title={project.title} text={project.text} href={project.href} />
        </section>
    </Element>
    ))}

    <div className="hidden md:flex justify-center">

    <div className="fixed bottom-[10%]  inline-flex items-center justify-center projectSections bg-black ">
        {projects.map((project, index) => (
        <React.Fragment key={index}>
            {index > 0 && (
            <img
                className="w-[2%] ml-[10px] mr-[10px]"
                src="/projects/ProjectsSectionsDivider.png"
                alt="Divider"
            />
            )}
            <ScrollLink
            to={project.id}
            smooth={true}
            duration={500}
            className={`hover:text-[#AF804B]  ${
                activeSection === project.id ? "text-[#AF804B]" : "text-[#979797]"
            }`}
            >
            {project.title}
            </ScrollLink>
        </React.Fragment>
        ))}
    </div>
    </div>
    </div>
    );
    }
