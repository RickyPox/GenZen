import Image from "next/image"
import Link from "next/link";
import { useState } from "react"


export default function Navbar () {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`${isMenuOpen ? 'z-20 bg-gradient-to-r from-black to-black/70 backdrop-blur-md' : 'bg-none'} flex w-screen h-screen absolute left-0 top-0`}>
        <div className="flex flex-col justify-between items-center">
            <button onClick={handleMenuToggle} className="text-white">
                <img src="/navbar/Menu.png" className={`w-[50px] ${isMenuOpen ? 'rotate-90' : 'rotate-0'} transition-all duration-200`} alt="menu"/>
            </button>
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col`}>
                    <Link href="#"  className="navbarItem flex items-center">
                        <img src="/navbar/Home.png" alt="Home"/> 
                        <img className="navbarItemStar transition-all duration-200" src="/navbar/GoldStar.png" alt="Star"/>
                    </Link>
                    <Link href="#" className="navbarItem flex items-center">
                        <img src="/navbar/Projects.png" alt="Projects"/> 
                        <img className="navbarItemStar transition-all duration-200" src="/navbar/GoldStar.png" alt="Star"/>
                    </Link>
                    <Link href="#" className="navbarItem flex items-center">
                        <img src="/navbar/AboutUs.png" alt="About Us"/> 
                        <img className="navbarItemStar transition-all duration-200" src="/navbar/GoldStar.png" alt="Star"/>
                    </Link>
                    <Link href="#" className="navbarItem flex items-center">
                        <img src="/navbar/Clients.png" alt="Clients"/> 
                        <img className="navbarItemStar transition-all duration-200" src="/navbar/GoldStar.png" alt="Star"/>
                    </Link>
                    <Link href="#" className="navbarItem flex items-center">
                        <img src="/navbar/ContactUs.png" alt="Contact Us"/> 
                        <img className="navbarItemStar transition-all duration-200" src="/navbar/GoldStar.png" alt="Star"/>
                    </Link>
            </div>
            <div className="flex">
                <img src="/Twitter.svg" alt="Twitter"/>
                <img src="/Insta.svg" alt="Insta"/>
                <img src="/LinkedIn.svg" alt="LinkedIn"/>
            </div>
        </div>
    </nav>
    )
}