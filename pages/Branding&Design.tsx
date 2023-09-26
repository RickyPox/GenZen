import BrandingDesignComponent from "@/components/Branding&DesingComponent";
import Navbar from "@/components/Navbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation} from 'swiper/modules';
import 'swiper/css/navigation';
import "swiper/css";

export default function BrandingDesign (){

    const items = [
        {
            name:"CryptoCade", 
            categorie:"Branding", 
            buttonTitle:"Comming Soon",
            imgsrc:"/brandingDesign/Cryptocade.png",
        },
        {
            name:"PrattyApes", 
            categorie:"Stream Branding", 
            buttonTitle:"Comming Soon",
            imgsrc:"/brandingDesign/PrattyApes.png",
        },
        {
            name:"Enigma", 
            categorie:"logo & social rebrand", 
            buttonTitle:"Comming Soon",
            imgsrc:"/brandingDesign/Enigma.png",
        },
        {
            name:"Royal Ties", 
            categorie:"Branding", 
            buttonTitle:"Comming Soon",
            imgsrc:"/brandingDesign/RoyalTies.png",
        },
        {
            name:"Moonies", 
            categorie:"Branding", 
            buttonTitle:"Comming Soon",
            imgsrc:"/brandingDesign/Moonies.png",
        },
        {
            name:"Oracles", 
            categorie:"logo & social rebrand", 
            buttonTitle:"Comming Soon",
            imgsrc:"/brandingDesign/Oracles.png",
        },
        {
            name:"Athlabs", 
            categorie:"Branding", 
            buttonTitle:"Comming Soon",
            imgsrc:"/brandingDesign/Athlabs.png",
        },
        {
            name:"Robin Hood", 
            categorie:"Branding", 
            buttonTitle:"Comming Soon",
            imgsrc:"/brandingDesign/RobinHood.png",
        },
        {
            name:"Sandbar", 
            categorie:"Branding", 
            buttonTitle:"Comming Soon",
            imgsrc:"/brandingDesign/Sandbar.png",
        },
        
    ]

    const groupedItems = [];
    for (let i = 0; i < items.length; i += 3) {
  groupedItems.push(items.slice(i, i + 3));
}

    return(
        <div>
            <Navbar></Navbar>
            <div className="page-border page fixed pointer-events-none z-[100]"/>
            <div className="bg-black w-[20px] absolute h-screen top-0 z-[80]"></div>
            <div className="bg-black w-[20px] absolute h-screen top-0 right-0 z-[80]"></div>
            <div className="bg-black w-screen absolute h-[20px] top-0 z-[80]"></div>
            <div className="bg-black w-screen absolute h-[20px] bottom-0 z-[80]"></div>
            <div>
                <img className="fixed w-full px-[50px] mt-[60px] left-0 right-0 m-auto z-[10]" src="/brandingDesign/brandingDesignTitle.png" alt="Title"/>
            </div>
            <Swiper
            slidesPerView={1}
            direction={"vertical"}
            mousewheel={true}
            navigation={true}
            modules={[Mousewheel, Navigation]}
            className="verticalSwiper h-screen">
                 {groupedItems.map((group, index) => (
        <SwiperSlide key={index}>
          <section className="grid grid-cols-3 items-center justify-items-center w-screen h-screen px-[20px]">
            {group.map((item, itemIndex) => (
              <BrandingDesignComponent
                key={itemIndex}
                name={item.name}
                categorie={item.categorie}
                buttonTitle={item.buttonTitle}
                imgsrc={item.imgsrc}
              />
            ))}
          </section>
        </SwiperSlide>
      ))}
            </Swiper>
        </div>
    )
}