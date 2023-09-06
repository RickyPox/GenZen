import Navbar from "@/components/Navbar";
import TakeMeThereButton from "@/components/TakeMeThereButton";
import Image from "next/image";


import { useEffect, useState } from "react";

export default function Services() {

const services = [
    { name: "Marketing\nTrailers", image: "/services/marketing.png", fullImage:"/services/marketing_full.png", href:"/"},
    { name: "Branding", image: "/services/branding.png", fullImage:"/services/branding_full.png" },
    { name: "Animation", image: "/services/animation.png", fullImage:"/services/animation_full.png"},
    { name: "Graphic\nDesign", image: "/services/graphicDesign.png", fullImage:"/services/graphicDesign_full.png" },
];

const totalServices = services.length;
const navbarWidth = 90;
const [serviceWidth, setServiceWidth] = useState(0);

useEffect(() => {
    setServiceWidth((window.innerWidth / totalServices) - navbarWidth / totalServices);
}, [totalServices]);

//Resize the services width when you rezise the page
useEffect(() => {
    const handleResize = () => {
    setServiceWidth((window.innerWidth / totalServices) - navbarWidth / totalServices);
    };
    window.addEventListener("resize", handleResize);
    return () => {
    window.removeEventListener("resize", handleResize);
    };
}, [totalServices]); 

const [openServiceIndex, setOpenServiceIndex] = useState(-1);

const handleOnClick = (index:any) => {
    if(index !== openServiceIndex){
    setOpenServiceIndex(index);
    } 
    else 
    {
    setOpenServiceIndex(-1);
    }
};

const nextService = () =>{
    if(openServiceIndex < totalServices-1){
        setOpenServiceIndex(openServiceIndex+1)
    } else {
        setOpenServiceIndex(0)
    }
}

return (
<div className="h-screen relative">
    <Navbar></Navbar>
    <div
    style={{ flexDirection: openServiceIndex === totalServices-1 ? "row-reverse" : "row", }} 
    className={`ml-[90px] flex text-white relative z-20`}>
        
        {services.map((service, index) => (
            <div 
                style={{backgroundImage: openServiceIndex === index ?  `url(${service.fullImage})`: `url(${service.image})`, 
                width:  openServiceIndex === index ? serviceWidth*(totalServices-1) : serviceWidth, 
                display: index === openServiceIndex || index === openServiceIndex+1 || openServiceIndex === totalServices-1 && index === 0|| openServiceIndex === -1 ? "flex":"none" }} 
                className={`bg-cover h-screen ${index=== openServiceIndex ? "justify-start" : "justify-center"} items-end overflow-x-hidden relative border-r-2 border-white transition-all duration-500`}
                key={service.name}
                onClick={() => handleOnClick(index)}
            >
                <div className={`h-[150px] flex flex-col items-center mb-[50px] space-y-[20px] transition-all duration-500 ${index === openServiceIndex ? "ml-[50px]" : ""}`}>
                    <div className={`${index === openServiceIndex ? "block" : "hidden"}`}>
                        <TakeMeThereButton href={service.href}/>
                    </div>
                    <p className="text-[36px] text-center whitespace-pre-wrap text-white transition-all duration-500">{service.name}</p>
                    
                </div>
            </div>
        ))}
    </div>
    <div className="flex flex-col space-y-5 absolute top-[50%] -translate-y-[50%] right-[20px] transition-all duration-500">
    {services.map((service, index) =>(
        <div 
        key={service.name}
        className={`${openServiceIndex === index ?  "bg-white": "bg-[#272727]"}  w-[6px] h-[80px] `}
        >
        </div>
    ))}
    </div>
    <div className={`absolute top-[50%] -translate-y-[50%] right-[150px] transition-all duration-500 ${openServiceIndex > -1 ? "block" : "hidden" }`}>
        <Image src="/arrow.svg" width={40} height={0} alt="arrow"
        onClick={nextService}/>
    </div>

</div>
    
)
}


    