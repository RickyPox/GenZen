import Testimonial from "@/components/Testimonial";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules'
import "swiper/css";
import 'swiper/css/navigation';
export default function TestimonialsCarousel (){

    const testimonials =[
        {
            name:"solbuckets",
            project:"sandbar",
            text:"Dive into a world of creativity and motion with our latest animation projects! Our team has been hard at work crafting captivating visual stories that come to life through the magic of animation. From mesmerizing character animations that breathe life into unique personalities, to dynamic motion graphics that convey complex ideas in a visually engaging manner, our portfolio showcases the seamless blend of artistry and technology."
        },
        {
            name:"t_h_crypto",
            project:"clear collectibles",
            text:"Working with Zen and his studio was an absolute pleasure. Their team supported us throughout all the way from idea generation to asset creation. I would personally highly recommend them to anyone looking for a team that has your back no matter what."
        },
        {
            name:"draxxts",
            project:"FAMOUS FOX FED",
            text:"We worked with Gen Zen to produce an animated short film for the Famous Fox Federation. We were incredibly impressed with their work. They were very prompt in their responses, always willing to jump on calls, and helpful in brainstorming ideas. The final product was incredible, and I would highly recommend them to anyone looking for high-quality animation or design work."       
        },
    ]
    return(

            <Swiper
                className="mySwipper"
                navigation={true} 
                modules={[Navigation]}
                centeredSlides={true}
                loop={true}
                spaceBetween={120}
                slidesPerView={2}

            >
                {testimonials.map((testimonial, index) =>(
                    <SwiperSlide
                    key={index}
                    >
                        <Testimonial name={testimonial.name} project={testimonial.project} text={testimonial.text}></Testimonial>
                    </SwiperSlide>
                ))}
            </Swiper>

    )
}