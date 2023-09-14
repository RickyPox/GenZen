import Navbar from "@/components/Navbar";

export default function About(){
    return(
        <div className="w-screen h-screen">
            <Navbar></Navbar>
            <div className="page-border page fixed"/>
            <div className="pt-[90px] flex items-center justify-center px-[50px]">
                <img className="w-full" src="/aboutUs/aboutUsTitle.png" alt="AboutUsTitle"></img>
            </div>
            <div className="w-screen flex justify-center px-[50px] mt-[100px]">
                <div>
                    <img className="w-[100%]" src="/aboutUs/Zen.png" alt="Zen"></img>
                </div>
                <div>
                    <img className="w-[100%]" src="/aboutUs/Hares.png" alt="Hares"></img>
                </div>
                <div>
                    <img className="w-[100%]" src="/aboutUs/Lewis.png" alt="Lewis"></img>
                </div>
                <div>
                    <img className="w-[100%]" src="/aboutUs/James.png" alt="James"></img>
                </div>
                <div>
                    <img className="w-[100%]" src="/aboutUs/David.png" alt="David"></img>
                </div>
            </div>
            <p className="text-center text-[22px] px-[140px] mt-[75px]">Pull back the curtain and explore a realm where captivating animation and fearless creativity converge to inspire exceptional brand journeys. We&apos;re a creative force, dedicated to sculpting unique stories and unforgettable designs that define brands and captivate audiences.</p>
        </div>
    )
}