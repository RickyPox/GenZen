
import Services3DComponent from "@/components/3DServicesComponent";
import Navbar from "@/components/Navbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation} from 'swiper/modules';
import 'swiper/css/navigation';
import "swiper/css";


export default function Services3D (){


    const items = [
        {
            name:"Reign Of Titans", 
            categorie:"3D Environments",
            imgsrc:"/3DServices/ROTEnvironments.png",
            buttonTitle:"Coming Soon",
        },
        {
            name:"Reign Of Titans", 
            categorie:"3D Rigging",
            imgsrc:"/3DServices/ROTRigging.png",
            buttonTitle:"Coming Soon",
        },
        {
            name:"Reign Of Titans", 
            categorie:"3D Modelling",
            imgsrc:"/3DServices/ROTModelling.png",
            buttonTitle:"Coming Soon",
        }, 
        {
            name:"Nekkro", 
            categorie:"3D Modelling",
            imgsrc:"/3DServices/Nekkro.png",
            buttonTitle:"Coming Soon",
        },  
        {
            name:"Zulpdex", 
            categorie:"3D Modelling",
            imgsrc:"/3DServices/Zulpdex.png",
            buttonTitle:"Coming Soon",
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
                <img className="fixed w-full px-[50px] mt-[60px] left-0 right-0 m-auto z-[10]" src="/3DServices/3DServicesTitle.png" alt="Title"/>
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
                <Services3DComponent
                    key={itemIndex}
                    name={item.name} 
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