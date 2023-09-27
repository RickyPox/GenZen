import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation} from 'swiper/modules';

export default function Contact(){
    return(
    <div>
        <Navbar></Navbar>
        <div className="page-border page fixed pointer-events-none z-[100]"/>
      <div className="bg-black w-[20px] absolute h-screen top-0 z-[80]"></div>
      <div className="bg-black w-[20px] absolute h-screen top-0 right-0 z-[80]"></div>
      <div className="bg-black w-screen absolute h-[20px] top-0 z-[80]"></div>
      <div className="bg-black w-screen absolute h-[20px] bottom-0 z-[80]"></div>
        <Swiper
        speed={900}
        slidesPerView={1}
        direction={"vertical"}
        mousewheel={true}
        navigation={true}
        modules={[Mousewheel, Navigation]}
        className="verticalSwiper h-screen">
            <SwiperSlide>
                <section className="flex justify-end pt-[100px] pr-[100px] w-screen h-screen relative">
                    <div className="w-3/4 flex flex-col items-end">
                        <img className="w-[100%]" src="/contact/SummonRavenTitle.png" alt="Title"></img>
                        <div className="w-[60%]">
                            <p className="text-[22px] text-justify mt-[100px]">
                                Summon the spirit of collaboration by exploring our dedicated space and engage in the art of ravenry. 
                                Like an ancient messenger, your raven will carry the essence of your project to us, igniting a conversation that bridges the past and present.
                            </p>
                        </div>
                    </div>
                    <img className='w-[59%] absolute left-0 bottom-0 -z-[10]' src="/contact/summonRavenChar.png" alt="Hero"/>
                </section>
            </SwiperSlide>
            <SwiperSlide>
                <section>
                <ContactForm></ContactForm>
                </section>
            </SwiperSlide>
        </Swiper>
    </div>
    )
}