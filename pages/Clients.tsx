import Navbar from "@/components/Navbar";
import TestimonialsComponent from "@/components/TestimonialsComponent";
import TrustedBy from "@/components/TrustedBy";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation} from 'swiper/modules';

export default function Clients(){
    return(
    <div>
        <Navbar></Navbar>
        <div className="page-border page fixed z-[100] pointer-events-none"/>
        <Swiper
        slidesPerView={1}
        direction={"vertical"}
        mousewheel={true}
        navigation={true}
        modules={[Mousewheel, Navigation]}
        className="verticalSwiper h-screen">
            <SwiperSlide>
                <section>
                    <TrustedBy></TrustedBy>
                </section>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative">
                    <TestimonialsComponent></TestimonialsComponent>
                    <div className="bg-black w-[15px] absolute h-screen top-0 z-[80]"></div>
                    <div className="bg-black w-[15px] absolute h-screen top-0 right-0 z-[80]"></div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
    )
}