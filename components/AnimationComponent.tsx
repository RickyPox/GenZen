import Button from "./Button";
import { useState } from "react";



export default function AnimationComponent (props:any) {

        return(
            <div>
                <div className="relative flex justify-center items-center w-[100%]">                   
                    <div className="z-40"><img className="w-[100%] " src="/animation/Ring.png" alt="Ring"></img></div>
                    <div className=" flex justify-center w-[100%] absolute ">
                        <img className=" w-[100%]" src={`/animation/${props.title}/Background.png`} alt="Background"></img>
                    </div>  
                    <div  className="flex justify-center left-0 right-0 m-auto absolute z-10">
                            <img 
                            style={{
                                width: "100%",
                                transform:` translateY(-${props.translateYChar})`
                            }} 
                            src={`/animation/${props.title}/Char.png`} 
                            alt="Character"></img> 
                    </div>
                    <div className="flex justify-center w-[100%] absolute z-10 ">
                        <img className="w-[100%] " src="/animation/BlackGradient.png" alt="Gradient"></img>
                    </div>
                    <div className="flex justify-center w-[100%] absolute ">
                        <img className="w-[100%]" src="/animation/Border.png" alt="Border"></img>
                    </div>
                    {/* STARS */}
                    <div className="flex justify-center w-[100%] absolute z-40 ">
                        <img
                        style={{
                            width: "100%",
                            scale:"0.80",
                            transform:` translate(${props.translateXTopStar}, ${props.translateYTopStar})`
                        }}  src="/animation/Star.png" alt="Star"/>
                    </div>
                    <div  className="flex justify-center w-[100%] absolute z-40 ">
                        <img
                        style={{
                            width: "100%",
                            scale:"0.6",
                            transform:` translate(${props.translateXMiddleStar}, ${props.translateYMiddleStar})`
                        }}  src="/animation/Star.png" alt="Star"/>
                    </div>
                    <div className="flex justify-center w-[100%] absolute z-40 ">
                        <img
                        style={{
                            width: "100%",
                            scale:"1",
                            transform:` translate(${props.translateXBottomStar}, ${props.translateYBottomStar})`
                        }}  src="/animation/Star.png" alt="Star"/>
                    </div>

                    {/* Text/Button */}
                    <div className="absolute bottom-[5%] left-0 right-0 m-auto z-50 w-[100%]"  >
                        <h2>{props.title}</h2>
                        <h3 className="mb-[10px]">{props.categorie}</h3>
                        <Button title={"Take Me There"} width="Big"></Button>
                    </div>
                </div>
            </div>
    )
}
