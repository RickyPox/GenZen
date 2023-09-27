import Link from "next/link"

export default function Testimonial (props:any){


    return(
        <Link href="#">
            <div className="inline-flex max-w-[850px] h-[300px] items-center space-x-[20px] bg-[#111111] px-[20px] border mt-[90px] mb-[40px] mx-[50px]">
                    <div className="flex flex-col space-y-[20px] justify-center items-center">
                        <img className="w-full" src={`/clients/${props.name}Avatar.png`} alt="ClientAvatar"></img>
                       
                            <div className="testimonial-name-project">
                                <h3>
                                    {props.name}
                                </h3>
                                <h3 className="text-[#717171] text-[16px]">
                                    {props.project}
                                </h3>
                            </div>
                        
                </div>
                <div>
                    <img src="/clients/testimonialDivider.png" alt="divider"></img>
                </div>
                <div>
                    <p className="text-justify testimonial">
                        {props.text}
                    </p>
                </div>
            </div>
            </Link>
    )
}