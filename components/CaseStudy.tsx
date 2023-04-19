import Image from "next/image"
import Link from "next/link"

export default function CaseStudy ({
    mainImage,
    title,
    timeTaken,
    overview,
    client,
    mainText,
    trailerVideo,
    styleframesImage_1,
    styleframesImage_2,
    styleframesImage_3,
    styleframesText_1,
    styleframesText_2,
    styleframesText_3,
    breakdownImage_1,
    breakdownImage_2,
    breakdownImage_3,
    breakdownImage_4,
    breakdownImage_5,
    breakdownText,
    getInTouchText,
    primaryColor,
    secundaryColor,
}:any) {
    return(
        <div className="text-white overflow-hidden"
            style={{ backgroundColor: `${primaryColor}` }}>
            {/* Title and Main Text */}
            <div  className="w-full h-[800px] relative">
                <Image 
                style={{ objectFit: "cover" }}
                fill src={mainImage} alt="RugPassMainImage" ></Image>
                <div 
                style={{ backgroundImage: `linear-gradient(to bottom, transparent, ${primaryColor})`}}
                className="w-screen h-[200px] absolute bottom-0">

                </div>
            </div>
            <div className="mx-[auto] px-[150px] max-w-[1440px]">
                <h1 className="text-[75px] text-center">{title}</h1>

                <section className="flex justify-center text-center space-x-[50px] mt-[60px]">
                    <div className="flex flex-col items-center justify-center w-[350px] h-[140px] border-[1px] border-white">
                        <p className="text-[24px] underline">Time Taken</p>
                        <p className="text-[40px]">{timeTaken}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[350px] h-[140px] border-[1px] border-white">
                        <p className="text-[24px] underline">OverView</p>
                        <p className="text-[32px]">{overview}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[350px] h-[140px] border-[1px] border-white">
                        <p className="text-[24px] underline">Client</p>
                        <p className="text-[40px]">{client}</p>
                    </div>
                </section>

                <section className="text-center mt-[120px]">  
                    <p className="text-[32px]">{mainText}</p>
                </section>
            </div>
             {/* Trailer */}
            <div
            style={{ backgroundColor: `${secundaryColor}` }}
            className="mt-[100px] py-[20px] relative">
                <div>
                    <p className="text-[75px] absolute right-[50px] top-[50%] -translate-y-[50%] verticaltext">Trailers</p>
                </div>
                <section>
                    <div className="mx-[auto] px-[150px] max-w-[1440px]">
                        <div className="flex justify-center">
                            <Image width={1100} height={40} src="/divider.svg" alt="divider"></Image>
                        </div>
                        <div className="flex justify-center my-[30px]">
                            <video  className="w-[100%]" controls>
                                <source src={trailerVideo} type="video/mp4"/>
                            </video>
                        </div>
                        <div className="flex justify-center">
                            <Image width={1100} height={40} src="/divider.svg" alt="divider"></Image>
                        </div>
                    </div>
                </section>
            </div>

             {/* StyleFrames */}
            <div className="relative">
                <div>
                    <p className="text-[75px] absolute right-[50px] top-[50%] -translate-y-[50%] verticaltext">StyleFrames</p>
                </div>
                <div className="mx-[auto] px-[150px] max-w-[1440px] py-[150px] flex flex-col space-y-[60px]">
                    <section className="flex space-x-[40px]">
                        <div className="w-2/3 relative">
                            <Image 
                            style={{ objectFit: "cover" }}
                            className="border-[1px] border-white" src={styleframesImage_1} fill alt="styleFramesImage"></Image>
                        </div>
                        <div className="w-[430px] p-[15px] flex items-center text-black text-[24px] text-center bg-white ">
                            <p className="p-[15px] border-2 border-black">{styleframesText_1}</p>
                        </div>
                    </section>

                    <section className="flex space-x-[40px]">
                        <div className="w-[430px] p-[15px] flex items-center text-black text-[24px] text-center bg-white ">
                            <p className="p-[15px] border-2 border-black">{styleframesText_2}</p>
                        </div>
                        <div className="w-2/3 relative">
                            <Image 
                            style={{ objectFit: "cover" }}
                            className="border-[1px] border-white" src={styleframesImage_2} fill alt="styleFramesImage"></Image>
                        </div>
                    </section>

                    <section className="flex space-x-[40px]">
                        <div className="w-2/3 relative">
                            <Image 
                            style={{ objectFit: "cover" }}
                            className="border-[1px] border-white" src={styleframesImage_3} fill alt="styleFramesImage"></Image>
                        </div>
                        <div className="w-[430px] p-[15px] flex items-center text-black text-[24px] text-center bg-white ">
                            <p className="p-[15px] border-2 border-black">{styleframesText_3}</p>
                        </div>
                    </section>
                </div>
            </div>

            {/* BreakDowns */}
            <div style={{ backgroundColor: `${secundaryColor}` }}
                className="py-[100px] relative">
                <div>
                    <p className="text-[75px] absolute right-[50px] top-[50%] -translate-y-[50%] verticaltext">BreakDown</p>
                </div>
                <div className="mx-[auto] px-[150px] max-w-[1440px]">
                    <div className="flex flex-col space-y-[60px]">
                        <img src={`${breakdownImage_1}`} className="w-full h-[610px]" alt="breakdownImage1"></img>
                        <img src={`${breakdownImage_2}`} className="w-full h-[300px]" alt="breakdownImage2"></img>
                        <img src={`${breakdownImage_3}`} className="w-full h-[610px]" alt="breakdownImage3"></img>
                        <div className="flex space-x-[40px]">
                            <img src={`${breakdownImage_4}`} className="w-1/2 h-[300px]" alt="breakdownImage4"></img>
                            <img src={`${breakdownImage_5}`} className="w-1/2 h-[300px]" alt="breakdownImage5"></img>
                        </div>
                    </div>
                    <div className="mt-[80px]">
                        <p className="text-[36px] text-center">
                            {breakdownText}
                        </p>
                    </div>
                </div>
            </div>
            {/* Get In Touch */}
            <div 
                className="py-[100px] bg-white">
                <div className="mx-[auto] px-[150px] max-w-[1440px]">
                    <div className="flex flex-col items-center">
                        <p className="text-black text-[48px] text-center">
                            {getInTouchText}
                        </p>
                        
                        <div 
                        style={{ backgroundColor:`${primaryColor}` }}
                        className=" p-[15px] flex items-center text-black text-[55px] text-center mt-[60px]">
                            <p className="p-[65px] border-2 border-white text-white">Get In Touch</p>
                        </div>

                        <div className="text-black underline flex flex-row items-center space-x-[15px] mt-[50px]">
                            <Link className="text-[40px]" href="#">
                                More of Our Work
                            </Link>
                            <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M31.0607 13.0607C31.6464 12.4749 31.6464 11.5251 31.0607 10.9393L21.5147 1.3934C20.9289 0.807614 19.9792 0.807614 19.3934 1.3934C18.8076 1.97919 18.8076 2.92893 19.3934 3.51472L27.8787 12L19.3934 20.4853C18.8076 21.0711 18.8076 22.0208 19.3934 22.6066C19.9792 23.1924 20.9289 23.1924 21.5147 22.6066L31.0607 13.0607ZM-1.31134e-07 13.5L30 13.5L30 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z" fill="black"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    )
}