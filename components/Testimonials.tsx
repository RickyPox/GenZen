export default function Testimonials (){


    return(
            <div className="inline-flex w-[870px] h-[300px] items-center space-x-[20px] bg-[#111111] px-[20px] border mt-[90px] mb-[40px]">
                <div className="flex flex-col space-y-[20px]">
                    <img src="/clients/solbucketsAvatar.png" alt="ClientAvatar"></img>
                    <div>
                        <h3>
                            solbuckets
                        </h3>
                        <h3 className="text-[#717171]">
                            sandbar
                        </h3>
                    </div>
                </div>
                <div>
                    <img src="/clients/testimonialDivider.png" alt="divider"></img>
                </div>
                <div>
                    <p className="text-justify testimonial">
                        Dive into a world of creativity and motion with our latest animation projects! 
                        Our team has been hard at work crafting captivating visual stories that come to life through the magic of animation. 
                        From mesmerizing character animations that breathe life into unique personalities, to dynamic motion graphics that convey 
                        complex ideas in a visually engaging manner, our portfolio showcases the seamless blend of artistry and technology.
                    </p>
                </div>
            </div>
    )
}