import ArtworkComponent from "@/components/ArtworkComponent";
import Navbar from "@/components/Navbar";

export default function Artwork (){
    return(
        <div>
            <Navbar></Navbar>
            <div className="page-border page fixed"/>
            <div>
                <img className="fixed w-full px-[50px] mt-[60px] left-0 right-0 m-auto -z-[10]" src="/artwork/ArtworkTitle.png" alt="Title"/>
            </div>
            
            <section className="flex space-x-10 w-screen h-screen justify-center items-center px-[20px]">
                <ArtworkComponent name="Viperous" rarity="1/1 artwork"></ArtworkComponent>
                <ArtworkComponent name="Meegos" rarity="1/1 artwork"></ArtworkComponent>
                <ArtworkComponent name="Fuddies" rarity="1/1 artwork"></ArtworkComponent>
            </section>
            <section className="flex space-x-10 w-screen h-screen justify-center items-center px-[20px]">
                <ArtworkComponent name="Viperous" rarity="1/1 artwork"></ArtworkComponent>
                <ArtworkComponent name="Meegos" rarity="1/1 artwork"></ArtworkComponent>
                <ArtworkComponent name="Fuddies" rarity="1/1 artwork"></ArtworkComponent>
            </section>
        </div>
    )
}