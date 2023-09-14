export default function TrustedBy (){

    const images=[
        {
            name:"Anybodies",
            src:"/clients/trustedBy/Anybodies.png",
        },
        {
            name:"ToysRUs",
            src:"/clients/trustedBy/ToysRUs.png"
        },
        {
            name:"Oracles",
            src:"/clients/trustedBy/Oracles.png"
        },
        {
            name:"Sandbar",
            src:"/clients/trustedBy/Sandbar.png"
        },
        {
            name:"ROT",
            src:"/clients/trustedBy/ROT.png"
        },
        {
            name:"Midas",
            src:"/clients/trustedBy/Midas.png"
        },
        {
            name:"JustApe",
            src:"/clients/trustedBy/JustApe.png"
        },
        {
            name:"FFF",
            src:"/clients/trustedBy/FFF.png"
        },
        {
            name:"Enigma",
            src:"/clients/trustedBy/Enigma.png"
        },
        {
            name:"Elixir",
            src:"/clients/trustedBy/Elixir.png"
        },
        {
            name:"Doordash",
            src:"/clients/trustedBy/Doordash.png"
        },
        {
            name:"Tombstoned",
            src:"/clients/trustedBy/Tombstoned.png"
        },
        {
            name:"DCF",
            src:"/clients/trustedBy/DCF.png"
        },
        {
            name:"Anybodies",
            src:"/clients/trustedBy/ClearCollectibles.png"
        },
        {
            name:"Anybodies",
            src:"/clients/trustedBy/ABC.png"
        },
        {
            name:"Anybodies",
            src:"/clients/trustedBy/021.png"
        },

    ]


    return(
        <div className="w-screen h-screen">
            <div className="pt-[90px] flex items-center justify-center px-[50px]">
                <img className="w-full" src="/clients/trustedBy/TrustedByTitle.png" alt="TrustedByTitle"></img>
            </div>
            <div className="flex justify-center">
                <div className="w-4/6 flex flex-wrap  justify-center items-center mb-[50px] mt-[35px] opacity-40">
                    {images.map((image, index) =>(
                        <div className="mt-[50px] mr-[25px] ml-[25px]"
                        key={index}>
                            <img  src={image.src} alt={image.name}></img>
                        </div>

                    ))}
                </div>
            </div>

            <div>
                <img className="m-auto" src="/clients/Divider.png" alt="Divider"></img>
            </div>
                <p className="text-center text-[22px] px-[140px] mt-[75px]"> 
                    With unwavering quality, a skilled team, transparent conversations, and a track record of reliability, clients rely on us. 
                    Continuously exceeding expectations, we&apos;re the ultimate destination for transforming imaginative visions into tangible results.
                </p>
        </div>
    )
}