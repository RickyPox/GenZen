import ArtworkComponent from "@/components/ArtworkComponent";
import Navbar from "@/components/Navbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation} from 'swiper/modules';
import ArtworkModal from "@/components/ArtworkModal";
import { useState } from "react";
import 'swiper/css/navigation';
import "swiper/css";


export default function Artwork (){

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');

    const toggleModal = (imgmodalsrc:any) => {
        setSelectedItem(imgmodalsrc); // Set the selected item's name
        setIsModalOpen(!isModalOpen);
        console.log(selectedItem)
    }; 

    const items = [
        {
            name:"Viperous", 
            rarity:"1/1 artwork", 
            imgsrc:"/artwork/Viperous.png",
            imgmodalsrc:"/artwork/modal/Viperous.png",
        },
        {
            name:"Meegos", 
            rarity:"1/1 artwork", 
            imgsrc:"/artwork/Meegos.png",
            imgmodalsrc:"/artwork/modal/Meegos.png",
        },
        
        {
            name:"Fuddies", 
            rarity:"1/1 artwork", 
            imgsrc:"/artwork/Fuddies.png",
            imgmodalsrc:"/artwork/modal/Fuddies.png",
        },
        
        {
            name:"Trash Panda", 
            rarity:"1/1 artwork", 
            imgsrc:"/artwork/TrashPanda.png",
            imgmodalsrc:"/artwork/modal/TrashPanda.png",
        },
        
        {
            name:"King Ape", 
            rarity:"1/1 artwork", 
            imgsrc:"/artwork/KingApe.png",
            imgmodalsrc:"/artwork/modal/KingApe.png",
        },
        
        {
            name:"Iceborg", 
            rarity:"1/1 artwork", 
            imgsrc:"/artwork/Iceborg.png",
            imgmodalsrc:"/artwork/modal/Iceborg.png",
        },
        
        {
            name:"Cryogen", 
            rarity:"1/1 artwork", 
            imgsrc:"/artwork/Cryogen.png",
            imgmodalsrc:"/artwork/modal/Cryogen.png",
        },
        
        {
            name:"Lucifer", 
            rarity:"1/1 artwork", 
            imgsrc:"/artwork/Lucifer.png",
            imgmodalsrc:"/artwork/modal/Lucifer.png",
        },
        
        {
            name:"Demoni", 
            rarity:"1/1 artwork", 
            imgsrc:"/artwork/Demoni.png",
            imgmodalsrc:"/artwork/modal/Demoni.png",
        },
        
        {
            name:"Surtur", 
            rarity:"1/1 artwork", 
            imgsrc:"/artwork/Surtur.png",
            imgmodalsrc:"/artwork/modal/Surtur.png",
        },
        
        {
            name:"Sandbar", 
            rarity:"1/1 artwork", 
            imgsrc:"/artwork/Sandbar.png",
            imgmodalsrc:"/artwork/modal/Sandbar.png",
        },
        
        {
            name:"The Joker", 
            rarity:"1/1 artwork", 
            imgsrc:"/artwork/TheJoker.png",
            imgmodalsrc:"/artwork/modal/TheJoker.png",
        },
        {
            name:"Pyromaniac", 
            rarity:"1/1 artwork", 
            imgsrc:"/artwork/Pyromaniac.png",
            imgmodalsrc:"/artwork/modal/Pyromaniac.png",
        },
        {
            name:"Temptation", 
            rarity:"1/1 artwork", 
            imgsrc:"/artwork/Temptation.png",
            imgmodalsrc:"/artwork/modal/Temptation.png",
        },
        {
            name:"Control", 
            rarity:"1/1 artwork", 
            imgsrc:"/artwork/Control.png",
            imgmodalsrc:"/artwork/modal/Control.png",
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
                <img className="fixed w-full px-[50px] mt-[60px] left-0 right-0 m-auto z-[10]" src="/artwork/ArtworkTitle.png" alt="Title"/>
            </div>
            <ArtworkModal  isOpen={isModalOpen} onClose={toggleModal} imgmodalsrc={selectedItem}></ArtworkModal>
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
                <ArtworkComponent
                    key={itemIndex}
                    name={item.name}
                    rarity={item.rarity}
                    imgsrc={item.imgsrc}
                    onClick={toggleModal}
                    imgmodalsrc={item.imgmodalsrc}

                />
            ))}
          </section>
        </SwiperSlide>
      ))}
            </Swiper>
        </div>
    )
}