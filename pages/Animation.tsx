import Navbar from "@/components/Navbar";
import AnimationComponent from "../components/AnimationComponent";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation} from 'swiper/modules';
import 'swiper/css/navigation';
import "swiper/css";

export default function Animation (){


    const items = [
        {
            name:"Famous Foxes", 
            categorie:"Marketing Trailer", 
            imgsrc:"/animation/FamousFoxes.png",
            buttonTitle:"Take Me There"
        },
        {
            name:"Elixir", 
            categorie:"Marketing Trailer", 
            imgsrc:"/animation/Elixir.png",
            buttonTitle:"Take Me There"
        },
        {
            name:"Sandbar", 
            categorie:"Marketing Trailer", 
            imgsrc:"/animation/Sandbar.png",
            buttonTitle:"Take Me There"
        },
        {
            name:"Toys R Us", 
            categorie:"Marketing Trailer", 
            imgsrc:"/animation/ToysRUs.png",
            buttonTitle:"Take Me There"
        },
        {
            name:"Reign Of Titans", 
            categorie:"Marketing Trailer", 
            imgsrc:"/animation/ROT.png",
            buttonTitle:"Take Me There"
        },
        {
            name:"Nekkro", 
            categorie:"Marketing Trailer", 
            imgsrc:"/animation/Nekkro.png",
            buttonTitle:"Take Me There"
        },
        {
            name:"Clear Collectibles", 
            categorie:"Marketing Trailer", 
            imgsrc:"/animation/ClearCollectibles.png",
            buttonTitle:"Take Me There"
        },
        {
            name:"Tombstoned", 
            categorie:"Marketing Trailer", 
            imgsrc:"/animation/Tombstoned.png",
            buttonTitle:"Take Me There"
        },
        {
            name:"Midas", 
            categorie:"Marketing Trailer", 
            imgsrc:"/animation/Midas.png",
            buttonTitle:"Take Me There"
        },
        {
            name:"Doordash", 
            categorie:"Marketing Trailer", 
            imgsrc:"/animation/Doordash.png",
            buttonTitle:"Take Me There"
        },
        {
            name:"ABC", 
            categorie:"Marketing Trailer", 
            imgsrc:"/animation/ABC.png",
            buttonTitle:"Take Me There"
        },
        {
            name:"Rugpass", 
            categorie:"Marketing Trailer", 
            imgsrc:"/animation/Rugpass.png",
            buttonTitle:"Take Me There"
        },
        {
            name:"021", 
            categorie:"Marketing Trailer", 
            imgsrc:"/animation/021.png",
            buttonTitle:"Take Me There"
        },
        {
            name:"Oracles", 
            categorie:"Marketing Trailer", 
            imgsrc:"/animation/Oracles.png",
            buttonTitle:"Take Me There"
        }, {
            name:"Just Ape", 
            categorie:"Marketing Trailer", 
            imgsrc:"/animation/JustApe.png",
            buttonTitle:"Take Me There"
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
                        <img className="fixed w-[90%] mt-[60px] left-0 right-0 m-auto z-[10]" src="/animation/AnimationTitle.png" alt="Title Image"/>
                    </div>
                    <Swiper 
                    speed={900}
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
              <AnimationComponent
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