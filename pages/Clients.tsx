import Navbar from "@/components/Navbar";
import TestimonialsCarousel from "@/components/TestimonialsCarousel"


export default function Clients(){
    return(
    <div className="w-screen h-screen">
        <div className="page-border page fixed"/>
        <Navbar></Navbar>
        
            <div className="pt-[90px] flex items-center justify-center px-[50px]">
                <img className="w-full" src="/clients/TestimonialsTitle.png" alt="TestimonialsTitle"></img>
            </div>

                <TestimonialsCarousel></TestimonialsCarousel>

        <div>
            <img className="m-auto" src="/clients/Divider.png" alt="Divider"></img>
        </div>
        <p className="text-center text-[22px] px-[140px] mt-[75px]"> 
            Through the lens of our clients&apos; testimonials, our reputation shines. 
            The voice of our clients speaks volumes about our reliability and creativity. 
            Their testimonials encapsulate our prowess in crafting captivating visual narratives.
        </p>
    </div>
    )
}