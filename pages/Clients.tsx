import Navbar from "@/components/Navbar";
import TestimonialsComponent from "@/components/TestimonialsComponent";
import TrustedBy from "@/components/TrustedBy";


export default function Clients(){
    return(
    <div>
        <div className="page-border page fixed"/>
        <Navbar></Navbar>
        <TrustedBy></TrustedBy>
        <TestimonialsComponent></TestimonialsComponent>
    </div>
    )
}