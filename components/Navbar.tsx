import Image from "next/image"
import Link from "next/link";
import { useState } from "react"


export default function Navbar () {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
    <nav className={`${isMenuOpen ? 'z-[100] bg-gradient-to-r from-black to-black/70 backdrop-blur-md' : 'bg-none'} flex w-screen h-screen left-0 top-0 fixed`}>
        <div className="flex flex-col md:my-[50px] md:mx-[50px] my-[20px] mx-[20px] w-full">
            <div>
                <button onClick={handleMenuToggle} className="text-white">
                    <img src="/navbar/Menu.png" className={`sm:w-[50px] w-[30px] ${isMenuOpen ? 'rotate-90' : 'rotate-0'} transition-all duration-200`} alt="menu"/>
                </button>
                <div className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col mt-[90px]`}>
                    <div className="flex flex-col space-y-[20px]">
                        <Link href="#"  className="navbarItem flex items-center">
                            <img className="sm:w-[100%] w-[23%]" src="/navbar/Home.png" alt="Home"/> 
                            <img className="sm:w-[100%] w-[12%] navbarItemStar transition-all duration-200" src="/navbar/GoldStar.png" alt="Star"/>
                        </Link>
                        <Link href="Projects" className="navbarItem flex items-center">
                            <img className="sm:w-[100%] w-[40%]" src="/navbar/Projects.png" alt="Projects"/> 
                            <img className="sm:w-[100%] w-[12%] navbarItemStar transition-all duration-200" src="/navbar/GoldStar.png" alt="Star"/>
                        </Link>
                        <Link href="#" className="navbarItem flex items-center">
                            <img className="sm:w-[100%] w-[40%]" src="/navbar/AboutUs.png" alt="About Us"/> 
                            <img className="sm:w-[100%] w-[12%] navbarItemStar transition-all duration-200" src="/navbar/GoldStar.png" alt="Star"/>
                        </Link>
                        <Link href="#" className="navbarItem flex items-center">
                            <img className="sm:w-[100%] w-[34%]" src="/navbar/Clients.png" alt="Clients"/> 
                            <img className="sm:w-[100%] w-[12%] navbarItemStar transition-all duration-200" src="/navbar/GoldStar.png" alt="Star"/>
                        </Link>
                        <Link href="#" className="navbarItem flex items-center">
                            <img className="sm:w-[100%] w-[50%]" src="/navbar/ContactUs.png" alt="Contact Us"/> 
                            <img className="sm:w-[100%] w-[12%] navbarItemStar transition-all duration-200" src="/navbar/GoldStar.png" alt="Star"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col space-y-[20px] sm:mt-[100px] mt-[10%]`}>
                <div className="flex space-x-[20px]">
                    <img className="sm:w-[100%] w-[6%]" src="/navbar/Twitter.svg" alt="alt"/>
                    <img className="sm:w-[100%] w-[6%]"  src="/navbar/LinkedIn.svg" alt="alt"/>
                    <img className="sm:w-[100%] w-[6%]"  src="/navbar/Insta.svg" alt="alt"/>
                </div>
                <div>
                    <p>Zen@GenZen.Studio</p>
                </div>
            </div>
        </div>
    </nav>
    )
}