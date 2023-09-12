import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";

export default function Clients(){
    return(
    <div className="w-screen h-screen flex flex-col items-center">
        <Navbar></Navbar>
        <div className="page-border page fixed z-[10]"/>
            <div className="mt-[90px] flex items-center px-[50px]">
                <img className="w-full" src="/clients/TestimonialsTitle.png" alt="TestimonialsTitle"></img>
            </div>

                <div className="flex space-x-[115px]">
                    <Testimonials></Testimonials>
                    <Testimonials></Testimonials>
                    <Testimonials></Testimonials>
                </div>

        <div>
            <img src="/clients/Divider.png" alt="Divider"></img>
        </div>
        <p className="text-center text-[22px] px-[140px] mt-[75px]"> 
            Through the lens of our clients&apos; testimonials, our reputation shines. 
            The voice of our clients speaks volumes about our reliability and creativity. 
            Their testimonials encapsulate our prowess in crafting captivating visual narratives.
        </p>
    </div>
    )
}