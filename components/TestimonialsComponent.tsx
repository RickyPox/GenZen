import TestimonialsCarousel from "./TestimonialsCarousel";

export default function TestimonialsComponent(){
    return(
        <div>
            <div className="pt-[90px] flex justify-center px-[50px]">
                    <img className="w-full" src="/clients/TestimonialsTitle.png" alt="TestimonialsTitle"></img>
                </div>
                    <TestimonialsCarousel></TestimonialsCarousel>
            <div>
                <img className="m-auto" src="/clients/Divider.png" alt="Divider"></img>
            </div>
            <section>
                <p className="text-center px-[140px] mt-[75px]"> 
                    Through the lens of our clients&apos; testimonials, our reputation shines. 
                    The voice of our clients speaks volumes about our reliability and creativity. 
                    Their testimonials encapsulate our prowess in crafting captivating visual narratives.
                </p>
                </section>
       </div>
    )
}