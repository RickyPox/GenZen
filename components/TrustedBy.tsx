import Link from "next/link"

export default function TrustedBy (){



    return(
        <div>
            <div className="pt-[90px] flex items-center justify-center px-[50px]">
                <img className="w-[70%]" src="/clients/trustedBy/TrustedByTitle.png" alt="TrustedByTitle"></img>
            </div>
            <div className="w-full">
                <div className="w-4/6 m-auto mt-[50px] mb-[50px] flex flex-col space-y-[45px] clients">
                    <div className="flex items-center justify-center space-x-[50px]">
                        <Link href="#">
                            <img className="w-full" src="/clients/trustedBy/Anybodies.png" alt="Anybodies"></img>
                        </Link>
                        <Link href="#">
                            <img className="w-full" src="/clients/trustedBy/ToysRUs.png" alt="ToysRUs"></img>
                        </Link>
                        <Link href="#">
                            <img className="w-full" src="/clients/trustedBy/Oracles.png" alt="Oracles"></img>
                        </Link>
                        <Link href="#">
                            <img className="w-full" src="/clients/trustedBy/Sandbar.png" alt="Sandbar"></img>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center space-x-[50px]">
                        <Link href="#">
                            <img className="w-full" src="/clients/trustedBy/ROT.png" alt="ROT"></img>
                        </Link>
                        <Link href="#">
                            <img className="w-full" src="/clients/trustedBy/Midas.png" alt="Midas"></img>
                        </Link>
                        <Link href="#">
                            <img className="w-full" src="/clients/trustedBy/JustApe.png" alt="JustApe"></img>~
                        </Link>
                        <Link href="#">
                            <img className="w-full" src="/clients/trustedBy/FamousFoxes.png" alt="FamousFoxes"></img>
                        </Link>
                        <Link href="#">
                            <img className="w-full" src="/clients/trustedBy/Enigma.png" alt="Enigma"></img>
                        </Link>
                        <Link href="#">
                            <img className="w-full" src="/clients/trustedBy/Elixir.png" alt="Elixir"></img>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center space-x-[50px]">
                        <Link href="#">
                            <img className="w-full" src="/clients/trustedBy/Doordash.png" alt="Doordash"></img>
                        </Link>
                        <Link href="#">
                            <img className="w-full" src="/clients/trustedBy/Tombstoned.png" alt="Tombstoned"></img>
                        </Link>
                        <Link href="#">
                            <img className="w-full" src="/clients/trustedBy/DCF.png" alt="DCF"></img>
                        </Link>
                        <Link href="#">
                            <img className="w-full" src="/clients/trustedBy/ClearCollectibles.png" alt="ClearCollectibles"></img>
                        </Link>
                        <Link href="#">
                            <img className="w-full" src="/clients/trustedBy/ABC.png" alt="ABC"></img>
                        </Link>
                        <Link href="#">
                            <img className="w-full" src="/clients/trustedBy/021.png" alt="021"></img>
                        </Link>
                    </div>
                </div>
            </div>    
            <div>
                <img  className="m-auto" src="/clients/Divider.png" alt="Divider"></img>
            </div>
            
                <p className="text-center px-[140px] mt-[45px]"> 
                    With unwavering quality, a skilled team, transparent conversations, and a track record of reliability, clients rely on us. 
                    Continuously exceeding expectations, we&apos;re the ultimate destination for transforming imaginative visions into tangible results.
                </p>
        </div>
    )
}