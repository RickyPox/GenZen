import Image from "next/image"
import Link from "next/link";
import { useState } from "react"


export default function Navbar () {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navigation = [
        { name: "Meet The Team", href: "#" },
        { name: "Services", href: "/services" },
        { name: "Case Studies", href: "#" },
        { name: "The First Collection", href: "#" },
        { name: "Clients", href: "#" },
        { name: "Start Your Project", href: "#" },
    ]

    return (
        <nav className="flex w-1/2 navbar h-screen absolute left-0 top-0">
            <div className="flex flex-col justify-between items-center w-[90px] py-[25px] border-r-[1px] border-b-[1px] border-white">
                <button onClick={handleMenuToggle} className="text-white">
                    <Image src="/menu.svg" width={36} height={0} alt="menu"/>
                </button>
                <p className="sidebartext text-white">
                    reform the next generation of artistry.
                </p>

                <Image src="/genzen.svg" width={36} height={0} alt="genzen"/>
            </div>

            <div className={`w-full ${isMenuOpen ? 'block z-20 bg-black' : 'hidden'}`}>
                <div className="my-[25px] mx-[30px]">
                    <div className="flex flex-col space-y-[30px]">
                        {navigation.map((item) => (
                            <Link 
                            key={item.name}
                            href={item.href}>
                            <p
                                
                                className="text-white text-[28px] border-2 border-white py-[35px] px-[30px] flex justify-between "
                            >
                                {item.name}
                                <Image src="/arrow.svg" width={30} height={0} alt="arrow"/>
                            </p>
                            </Link>
                        ))}
                    </div>
                    <div className="border-2 border-white py-[35px] px-[30px] mt-[90px] ">
                        <a>
                            <Image src="/twitter.svg" width={30} height={0} alt="twitter"/>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}