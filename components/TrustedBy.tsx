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
        <div>
            <div className="pt-[90px] flex items-center justify-center px-[50px]">
                <img className="w-[70%]" src="/clients/trustedBy/TrustedByTitle.png" alt="TrustedByTitle"></img>
            </div>
            <div className="w-full">
                <div className="w-4/6 m-auto">
                    <div className="w-full flex flex-wrap justify-center items-center mb-[30px] mt-[35px] opacity-40">
                        {images.map((image, index) =>(

                            <img key={index} className="w-full h-auto px-[25px] mt-[50px]" src={image.src} alt={image.name}></img>
                        ))}
                    </div>
                </div>
            </div>    
            <div>
                <img className="m-auto" src="/clients/Divider.png" alt="Divider"></img>
            </div>
                <p className="text-center px-[140px] mt-[45px]"> 
                    With unwavering quality, a skilled team, transparent conversations, and a track record of reliability, clients rely on us. 
                    Continuously exceeding expectations, we&apos;re the ultimate destination for transforming imaginative visions into tangible results.
                </p>
        </div>
    )
}