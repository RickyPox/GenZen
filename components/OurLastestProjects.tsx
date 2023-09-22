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
            loopedSlides={2}
            pagination={true} 
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
                <div className="bg-black w-[200px] h-[100%] absolute blur-[100px] top-0 right-0 z-[100]"></div>
        </Swiper>
    )
}
