import Image from "next/image"
import Link from "next/link";
import { useState } from "react"


export default function Navbar () {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [rotation, setRotation] = useState(0)

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
        setRotation((prevRotation) => (prevRotation + 90));
    };



    return (
    <nav className={`${isMenuOpen ? 'bg-gradient-to-r from-black to-black/70 backdrop-blur-md w-screen h-screen' : 'bg-none w-0 h-0'} z-[100] flex  left-0 top-0 fixed`}>
        <div className="flex flex-col my-[50px] mx-[50px] w-full">
            <div>
                <button onClick={handleMenuToggle} className="text-white">
                    <img src="/navbar/Menu.png" 
                    style={{ transform: `rotate(${rotation}deg)` }}
                    className={`sm:w-[50px] w-[30px] transition-all duration-200`} alt="menu"/>
                </button>

                <div className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col mt-[90px]`}>
                    <div className="flex flex-col space-y-[20px]">
                        <Link href="/"  className="navbarItem flex items-center">
                            <img className="sm:w-[100%] w-[23%]" src="/navbar/Home.png" alt="Home"/> 
                            <img className="sm:w-[100%] w-[12%] navbarItemStar transition-all duration-200" src="/navbar/GoldStar.png" alt="Star"/>
                        </Link>
                        <Link href="Projects" className="navbarItem flex items-center">
                            <img className="sm:w-[100%] w-[40%]" src="/navbar/Projects.png" alt="Projects"/> 
                            <img className="sm:w-[100%] w-[12%] navbarItemStar transition-all duration-200" src="/navbar/GoldStar.png" alt="Star"/>
                        </Link>
                        <Link href="About" className="navbarItem flex items-center">
                            <img className="sm:w-[100%] w-[40%]" src="/navbar/AboutUs.png" alt="About Us"/> 
                            <img className="sm:w-[100%] w-[12%] navbarItemStar transition-all duration-200" src="/navbar/GoldStar.png" alt="Star"/>
                        </Link>
                        <Link href="Clients" className="navbarItem flex items-center">
                            <img className="sm:w-[100%] w-[34%]" src="/navbar/Clients.png" alt="Clients"/> 
                            <img className="sm:w-[100%] w-[12%] navbarItemStar transition-all duration-200" src="/navbar/GoldStar.png" alt="Star"/>
                        </Link>
                        <Link href="Contact" className="navbarItem flex items-center">
                            <img className="sm:w-[100%] w-[50%]" src="/navbar/ContactUs.png" alt="Contact Us"/> 
                            <img className="sm:w-[100%] w-[12%] navbarItemStar transition-all duration-200" src="/navbar/GoldStar.png" alt="Star"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col space-y-[20px] sm:mt-[100px] mt-[10%]`}>
                <div className="flex space-x-[20px]">
                    <a href="#">
                        <img className="sm:w-[100%] w-[6%] cursor-pointer socials" src="/navbar/Twitter.svg" alt="alt"/>
                    </a>
                    <a href="#">
                        <img className="sm:w-[100%] w-[6%] cursor-pointer socials"  src="/navbar/LinkedIn.svg" alt="alt"/>
                    </a>
                    <a href="#">
                        <img className="sm:w-[100%] w-[6%] cursor-pointer socials"  src="/navbar/Insta.svg" alt="alt"/>
                    </a>
                </div>
                <div>
                    <p>Zen@GenZen.Studio</p>
                </div>
            </div>
        </div>
    </nav>
    )
}