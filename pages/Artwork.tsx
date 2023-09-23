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
    const [selectedItemName, setSelectedItemName] = useState('');

    const toggleModal = (name:any) => {
        setSelectedItemName(name); // Set the selected item's name
        setIsModalOpen(!isModalOpen);
    };

    return(
        <div>
            <Navbar></Navbar>
            <div className="page-border page fixed"/>
            <div>
                <img className="fixed w-full px-[50px] mt-[60px] left-0 right-0 m-auto -z-[10]" src="/artwork/ArtworkTitle.png" alt="Title"/>
            </div>
            <ArtworkModal  isOpen={isModalOpen} onClose={toggleModal} name={selectedItemName}></ArtworkModal>
            <Swiper
            slidesPerView={1}
            direction={"vertical"}
            mousewheel={true}
            navigation={true}
            modules={[Mousewheel, Navigation]}
            className="verticalSwiper h-screen">
                <SwiperSlide>
                    <section className="flex space-x-10 w-screen h-screen justify-center items-center px-[20px]">
                        <ArtworkComponent onClick={toggleModal} name="Viperous" rarity="1/1 artwork"></ArtworkComponent>
                        <ArtworkComponent onClick={toggleModal} name="Meegos" rarity="1/1 artwork"></ArtworkComponent>
                        <ArtworkComponent onClick={toggleModal} name="Fuddies" rarity="1/1 artwork"></ArtworkComponent>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="flex space-x-10 w-screen h-screen justify-center items-center px-[20px]">
                        <ArtworkComponent onClick={toggleModal} name="Viperous" rarity="1/1 artwork"></ArtworkComponent>
                        <ArtworkComponent onClick={toggleModal} name="Meegos" rarity="1/1 artwork"></ArtworkComponent>
                        <ArtworkComponent onClick={toggleModal} name="Fuddies" rarity="1/1 artwork"></ArtworkComponent>
                    </section>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}