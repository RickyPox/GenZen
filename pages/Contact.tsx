import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation} from 'swiper/modules';

export default function Contact(){
    return(
    <div>
        <Navbar></Navbar>
        <div className="page-border page fixed"/>
        <Swiper
        slidesPerView={1}
        direction={"vertical"}
        mousewheel={true}
        navigation={true}
        modules={[Mousewheel, Navigation]}
        className="verticalSwiper h-screen">
            <SwiperSlide>
                <div className="flex justify-end pt-[100px] pr-[100px] w-screen h-screen relative">
                    <div className="w-1/2">
                        <img className="w-[100%]" src="/contact/SummonRavenTitle.png" alt="Title"></img>
                        <p className="text-[22px] text-justify mt-[100px]">
                            Summon the spirit of collaboration by exploring our dedicated space and engage in the art of ravenry. 
                            Like an ancient messenger, your raven will carry the essence of your project to us, igniting a conversation that bridges the past and present.
                        </p>
                    </div>
                    <img className='w-[100%] absolute left-0 bottom-0 -z-[10] ml-[20px] mb-[20px]' src="/contact/summonRavenChar.png" alt="Hero"/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <ContactForm></ContactForm>
            </SwiperSlide>
        </Swiper>
    </div>
    )
}