import Navbar from "@/components/Navbar";
import AnimationComponent from "../components/AnimationComponent";

export default function Animation (){
    return(
                <div>
                    <Navbar></Navbar>
                    <div className="page-border page fixed -z-[10]"/>
                    <div>
                        <img className="fixed w-[90%] mt-[60px] left-0 right-0 m-auto -z-[10]" src="/animation/AnimationTitle.png" alt="Title Image"/>
                    </div>
                    <div>
                        <img className="fixed w-[90%] mt-[60px] left-0 right-0 m-auto bottom-[50px] z-[50] cursor-pointer" src="/Scroll_Icon.png" alt="Scroll Icon"/>
                    </div>

                    <section className="flex space-x-10 w-screen h-screen justify-center items-center px-[20px] overflow-hidden ">
                        <div > 
                            <AnimationComponent title={"Famous Foxes"} translateYChar={"17%"} 
                            translateXTopStar={"-45%"} translateYTopStar={"-25%"} 
                            translateXMiddleStar={"60%"} translateYMiddleStar={"0"} 
                            translateXBottomStar={"0"} translateYBottomStar={"50%"}
                            categorie={"Marketing Trailer"}></AnimationComponent>
                        </div> 
                        <div> 
                        <AnimationComponent title={"Elixir"} translateYChar={"17%"} 
                            translateXTopStar={"-45%"} translateYTopStar={"-25%"} 
                            translateXMiddleStar={"60%"} translateYMiddleStar={"0"} 
                            translateXBottomStar={"0"} translateYBottomStar={"50%"}
                            categorie={"Marketing Trailer"}></AnimationComponent>
                        </div> 
                        <div> 
                        <AnimationComponent title={"Sandbar"} translateYChar={"17%"} 
                            translateXTopStar={"-45%"} translateYTopStar={"-25%"} 
                            translateXMiddleStar={"60%"} translateYMiddleStar={"0"} 
                            translateXBottomStar={"0"} translateYBottomStar={"50%"}
                            categorie={"Marketing Trailer"}></AnimationComponent>
                        </div> 
                    </section>
                    <section className="flex space-x-10 w-screen h-screen justify-center items-center px-[20px] overflow-hidden">
                        <div> 
                            <AnimationComponent title={"Famous Foxes"} translateYChar={"17%"} 
                            translateXTopStar={"-45%"} translateYTopStar={"-25%"} 
                            translateXMiddleStar={"60%"} translateYMiddleStar={"0"} 
                            translateXBottomStar={"0"} translateYBottomStar={"50%"}
                            categorie={"Marketing Trailer"}></AnimationComponent>
                        </div> 
                        <div> 
                        <AnimationComponent title={"Elixir"} translateYChar={"17%"} 
                            translateXTopStar={"-45%"} translateYTopStar={"-25%"} 
                            translateXMiddleStar={"60%"} translateYMiddleStar={"0"} 
                            translateXBottomStar={"0"} translateYBottomStar={"50%"}
                            categorie={"Marketing Trailer"}></AnimationComponent>
                        </div> 
                        <div> 
                        <AnimationComponent title={"Sandbar"} translateYChar={"17%"} 
                            translateXTopStar={"-45%"} translateYTopStar={"-25%"} 
                            translateXMiddleStar={"60%"} translateYMiddleStar={"0"} 
                            translateXBottomStar={"0"} translateYBottomStar={"50%"}
                            categorie={"Marketing Trailer"}></AnimationComponent>
                        </div> 
                    </section>

                    
                </div>
    )
}