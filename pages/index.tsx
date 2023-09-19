import Navbar from '@/components/Navbar'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation} from 'swiper/modules';

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="page-border page fixed"/>
      <Swiper
        slidesPerView={1}
        direction={"vertical"}
        mousewheel={true}
        navigation={true}
        modules={[Mousewheel, Navigation]}
        className="verticalSwiper h-screen">
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
        <section className='w-screen h-screen'>
          <div className='w-1/2 flex items-center pl-[120px] h-screen'>
            <div>
              <img className='w-full pt-[60px]' src='/Home/OurLatestProjects.png' alt="Title"></img>
              <p className='text-justify'>
                Dive into a world of creativity and motion with our latest animation projects! 
                Our team has been hard at work crafting captivating visual stories that come to life through the magic of animation. 
                From mesmerizing character animations that breathe life into unique personalities, 
                to dynamic motion graphics that convey complex ideas in a visually engaging manner, our portfolio showcases the seamless blend of artistry and technology.
              </p>
              <div className='flex items-center mt-[50px] space-x-[10px]'>
                <h3 className=' inline-flex border-b-2 border-[#AF814B] text-left '>
                  See more of our Work
                </h3>
                <img className='w-[40px] h-[40px] -rotate-90' src="/Scroll_Icon.png" alt="ScrollIcon"></img>
              </div>
            </div>
          </div>
        </section>
        </SwiperSlide>
      </Swiper>
    </div>
    
  )
}
