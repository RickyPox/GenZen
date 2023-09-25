import React, { useEffect, useMemo, useState } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import Navbar from "@/components/Navbar";
import ProjectComponent from "@/components/ProjectComponent";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination} from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';

export default function Projects() {

const projects = useMemo(() => [
{
    title: "Animation",
    text: "Venture into our animation realm, where ideas take on vibrant narratives through captivating visuals. Unveil our portfolio for a visual storytelling odyssey.",
    id: "animation",
    href: "Animation",
    imgsrcTitle:"/projects/animation/animationTitle.png",
    imgsrcChar:"/projects/animation/animationChar.png",
},
{
    title: "3D services",
    text: "Unlock creativity with our 3D services. From building unique characters, environments and a wide variety of 3D models, let your imagination run wild.",
    id: "services3D",
    href: "3DServices",
    imgsrcTitle:"/projects/3Dservices/3DservicesTitle.png",
    imgsrcChar:"/projects/3Dservices/3DservicesChar.png",
},
{
    title: "Branding & Design",
    text: "Explore our branding and design portfolio, a testament to our skill in turning brand visions into impactful designs.",
    id: "branding&Desing",
    href: "Branding&Design",
    imgsrcTitle:"/projects/brandingDesign/brandingDesignTitle.png",
    imgsrcChar:"/projects/brandingDesign/brandingDesignChar.png",
},
{
    title: "Artwork",
    text: "A Glimpse of Imagination. Our collection of artworks that span different styles and emotions, inviting you to connect with creativity.",
    id: "artwork",
    href: "Artwork",
    imgsrcTitle:"/projects/artwork/ArtworkTitle.png",
    imgsrcChar:"/projects/artwork/ArtworkChar.png",
},
// Add More projects
],[]);
/* 
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
}, [projects, activeSection]);

const ScrollTop = () => {
const activeIndex = projects.findIndex((p) => p.id === activeSection);
if (activeIndex !== -1 && activeIndex < projects.length - 1) {
    const nextSection = document.getElementById(projects[activeIndex+1].id);
    if (nextSection) {
    nextSection.scrollIntoView();
    }
}
} */

return (
<div className='relative'>
      <Navbar></Navbar>
      <div className="page-border page fixed pointer-events-none z-[100]"/>
      <div className="bg-black w-[20px] absolute h-screen top-0 z-[80]"></div>
      <div className="bg-black w-[20px] absolute h-screen top-0 right-0 z-[80]"></div>
      <div className="bg-black w-screen absolute h-[20px] top-0 z-[80]"></div>
      <div className="bg-black w-screen absolute h-[20px] bottom-0 z-[80]"></div>
    <Swiper
    direction={"vertical"}
    mousewheel={true}
    modules={[Mousewheel, Pagination]}
    pagination={{
        clickable: true, // Make pagination clickable
    renderBullet: function (index, className) {
        // Customize pagination bullet
        return(
            '<div class="' + className + '">' + projects[index].title + '</div>');
        },
    }}
    className="h-screen z-30 text-white projectsSwiper">
    {projects.map((project, index) => (
        <SwiperSlide key={index}>
        <section id={project.id}>
            <ProjectComponent title={project.title} text={project.text} href={project.href} imgsrcTitle={project.imgsrcTitle} imgsrcChar={project.imgsrcChar} />
        </section>
        </SwiperSlide>
    ))}
    </Swiper>
 {/*     <div className="flex justify-center">
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
            duration={100}
            className={`hover:text-[#AF804B] hover:scale-110 transition-all duration-200 relative z-100 ${
                activeSection === project.id ? "text-[#AF804B]" : "text-[#979797]"
            }`}
            onClick={() => setActiveSection(project.id)} // Atualize a seção ativa ao clicar
            >
            {project.title}
            </ScrollLink>
        </React.Fragment>
        ))}
    </div>
    </div>  */}
</div>
);
}
