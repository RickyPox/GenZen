import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay,} from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';

export default function OurLastestProjects (){

    const images=[
        {
            name:"ABC"
        },
        {
            name:"ROT"
        },
        {
            name:"Nekkro"
        },
        {
            name:"Doordash"
        },

]

    return(
        <Swiper 
            className='latestProjectsSwiper pb-[50px]'
            slidesPerView={3}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable:true }} 
            loop={true}
            spaceBetween={180}
            
            modules={[Autoplay,Pagination]}
            >

                {images.map((image, index) =>(
                    <SwiperSlide
                    key={index}
                    >
                        <img className='mb-[80px]' src={`/latestProjects/${image.name}.png`} alt={`${image.name}`}/>
                    </SwiperSlide>
                ))}
                <div className="bg-gradient-to-l from-black to-black/0 w-[200px] h-[100%] absolute top-0 right-0 z-[100] pointer-events-none"></div>
                <div className="bg-gradient-to-r from-black to-black/0 w-[350px] h-[100%] absolute  top-0 left-0 z-[100] pointer-events-none"></div>
        </Swiper>
    )
}
