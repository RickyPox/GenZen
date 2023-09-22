import Navbar from '@/components/Navbar'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation} from 'swiper/modules';
import Link from 'next/link';
import OurLastestProjects from '@/components/OurLastestProjects';
import 'swiper/css/navigation';
import "swiper/css";
import 'swiper/css/pagination';


export default function Home() {
  return (
    <div className='relative'>
      <Navbar></Navbar>
      <div className="page-border page fixed pointer-events-none z-[100]"/>
      <div className="bg-black w-[20px] absolute h-screen top-0 z-[80]"></div>
      <div className="bg-black w-[20px] absolute h-screen top-0 right-0 z-[80]"></div>
      <div className="bg-black w-screen absolute h-[20px] top-0 z-[80]"></div>
      <div className="bg-black w-screen absolute h-[20px] bottom-0 z-[80]"></div>

     <Swiper
        slidesPerView={1}
        direction={"vertical"}
        mousewheel={true}
        navigation={true}
        modules={[Mousewheel, Navigation]}
        className="verticalSwiper h-screen relative z-70">
          <SwiperSlide>
          <section className='w-screen h-screen flex justify-center '>
            <img className='w-full px-[100px] m-auto' src='/Home/Hero.png' alt="Hero"></img>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='w-screen h-screen'>
            <img className='w-full px-[50px] m-auto pt-[60px]' src='/Home/ShowReel.png' alt="Title"></img>
            <div className='videoBorder w-4/6 h-4/6 m-auto'>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
        <section className='w-screen h-screen flex items-center justify-center'>
          <div className='w-1/2 flex items-center pl-[120px] h-screen'>
            <div>
              <img className='w-full pt-[60px]' src='/Home/OurLatestProjects.png' alt="Title"></img>
              <p className='text-justify'>
                Dive into a world of creativity and motion with our latest animation projects! 
                Our team has been hard at work crafting captivating visual stories that come to life through the magic of animation. 
                From mesmerizing character animations that breathe life into unique personalities, 
                to dynamic motion graphics that convey complex ideas in a visually engaging manner, our portfolio showcases the seamless blend of artistry and technology.
              </p>
              <Link href="#">
                <div className='inline-flex items-center mt-[50px] space-x-[10px] cursor-pointer'>
                  <h3 className=' inline-flex border-b-2 border-[#AF814B] text-left hover:scale-110 transition-all duration-200 '>
                    See more of our Work
                  </h3>
                  <img className='w-[40px] h-[40px] -rotate-90 leftRightAnimation' src="/Scroll_Icon.png" alt="ScrollIcon"></img>
                </div>
              </Link>
            </div>
          </div>
            <div className='w-1/2 pl-[90px]'>
              <OurLastestProjects></OurLastestProjects>
            </div>
        </section>
        </SwiperSlide>
     </Swiper>
    </div>
    
  )
}
