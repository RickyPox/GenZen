import Navbar from "@/components/Navbar";
import TestimonialsComponent from "@/components/TestimonialsComponent";
import TrustedBy from "@/components/TrustedBy";


export default function Clients(){
    return(
    <div>
        <div className="page-border page fixed z-[100] pointer-events-none"/>
        <Navbar></Navbar>
        <section>
        <TrustedBy></TrustedBy>
        </section>
        <div className="relative">
            <TestimonialsComponent></TestimonialsComponent>
            <div className="bg-black w-[15px] absolute h-screen top-0 z-[80]"></div>
            <div className="bg-black w-[15px] absolute h-screen top-0 right-0 z-[80]"></div>
        </div>
    </div>
    )
}