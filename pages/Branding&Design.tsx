import BrandingDesignComponent from "@/components/Branding&DesingComponent";
import Navbar from "@/components/Navbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation} from 'swiper/modules';
import 'swiper/css/navigation';
import "swiper/css";

export default function BrandingDesign (){
    return(
        <div>
            <Navbar></Navbar>
            <div className="page-border page fixed"/>
            <div>
                <img className="fixed w-full px-[50px] mt-[60px] left-0 right-0 m-auto -z-[10]" src="/brandingDesign/brandingDesignTitle.png" alt="Title"/>
            </div>
            <Swiper
            slidesPerView={1}
            direction={"vertical"}
            mousewheel={true}
            navigation={true}
            modules={[Mousewheel, Navigation]}
            className="verticalSwiper h-screen">
                <SwiperSlide>
                    <section className="flex space-x-10 w-screen h-screen justify-center items-center px-[20px]">
                        <BrandingDesignComponent name="CryptoCade" categorie="Branding" buttonTitle="Comming Soon"></BrandingDesignComponent>
                        <BrandingDesignComponent name="PrattyApes" categorie="Stream Branding" buttonTitle="Comming Soon"></BrandingDesignComponent>
                        <BrandingDesignComponent name="Enigma" categorie="logo & social rebrand" buttonTitle="Comming Soon"></BrandingDesignComponent>
                    </section>
                </SwiperSlide>
                
                <SwiperSlide>
                    <section className="flex space-x-10 w-screen h-screen justify-center items-center px-[20px]">
                        <BrandingDesignComponent name="CryptoCade" categorie="Branding" buttonTitle="Comming Soon"></BrandingDesignComponent>
                        <BrandingDesignComponent name="PrattyApes" categorie="Stream Branding" buttonTitle="Comming Soon"></BrandingDesignComponent>
                        <BrandingDesignComponent name="Enigma" categorie="logo & social rebrand" buttonTitle="Comming Soon"></BrandingDesignComponent>
                    </section>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}