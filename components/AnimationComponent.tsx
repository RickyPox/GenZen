import { MouseParallaxContainer, MouseParallaxChild  } from "react-parallax-mouse";
import Tilt from "react-parallax-tilt";
import Button from "./Button";
import { useState } from "react";



export default function AnimationComponent (props:any) {

    const [tiltValues, setTiltValues] = useState({ x: 0, y: 0 });

const handleMouseMove = (e:any) => {
    const { clientX, clientY, target } = e;
    const { left, top, width, height } = target.getBoundingClientRect();

    const x = (clientX - left - width / 2) / (width / 2);
    const y = (clientY - top - height / 2) / (height / 2);

    setTiltValues({ x, y });
};

const mouseLeave = () => {
    setTiltValues({x:0,y:0})
}

const { x, y } = tiltValues;

const tiltStyleChar = {
    transform: `rotateX(${y * 25}deg) rotateY(${x * 25}deg) translateX(${-x * 10}px) translateY(${-y * 10}px)`,

};

const tiltStyleStar = {
    transform: `rotateX(${y * 20}deg) rotateY(${x * 20}deg)`,
};

const tiltStyleBackground = {
    transform: `rotateX(${y * 10}deg) rotateY(${x * 10}deg)`,
};



    return(
            <div >
                <div className="relative flex justify-center items-center w-[100%]">
                    <div className="bg-none absolute w-[100%] h-[100%] z-50 " onMouseMove={handleMouseMove} onMouseLeave={mouseLeave}/>
                    <div style={tiltStyleBackground} className="z-40"><img className="w-[100%] " src="/animation/Ring.png" alt="Ring"></img></div>
                    <div style={tiltStyleBackground} className=" flex justify-center w-[100%] absolute divToTilt">
                        <img className=" w-[100%]" src={`animation/${props.title}/Background.png`} alt="Background"></img>
                    </div>  
                    <div  style={tiltStyleChar} className="flex justify-center left-0 right-0 m-auto absolute z-10 divToTilt">
                            <img 
                            
                            style={{
                                width: "100%",
                                transform:` translateY(-${props.translateYChar})`
                            }} 
                            src={`animation/${props.title}/Char.png`} 
                            alt="Character"></img> 
                    </div>
                    <div className="flex justify-center w-[100%] absolute z-10 divToTilt">
                        <img style={tiltStyleBackground} className="w-[100%] " src="/animation/BlackGradient.png" alt="Gradient"></img>
                    </div>
                    <div style={tiltStyleBackground} className="flex justify-center w-[100%] absolute divToTilt">
                        <img className="w-[100%]" src="/animation/Border.png" alt="Border"></img>
                    </div>
                    {/* STARS */}
                    <div style={tiltStyleStar} className="flex justify-center w-[100%] absolute z-40 divToTilt">
                        <img
                        style={{
                            width: "100%",
                            scale:"0.80",
                            transform:` translate(${props.translateXTopStar}, ${props.translateYTopStar})`
                        }}  src="/animation/Star.png" alt="Star"/>
                    </div>
                    <div style={tiltStyleStar} className="flex justify-center w-[100%] absolute z-40 divToTilt">
                        <img
                        style={{
                            width: "100%",
                            scale:"0.6",
                            transform:` translate(${props.translateXMiddleStar}, ${props.translateYMiddleStar})`
                        }}  src="/animation/Star.png" alt="Star"/>
                    </div>
                    <div style={tiltStyleStar}  className="flex justify-center w-[100%] absolute z-40 divToTilt">
                        <img
                        style={{
                            width: "100%",
                            scale:"1",
                            transform:` translate(${props.translateXBottomStar}, ${props.translateYBottomStar})`
                        }}  src="/animation/Star.png" alt="Star"/>
                    </div>

                    {/* Text/Button */}
                    <div className="absolute bottom-[5%] left-0 right-0 m-auto z-40 w-[100%]">
                        <h2>{props.title}</h2>
                        <h3 className="mb-[10px]">{props.categorie}</h3>
                        <Button title={"Take Me There"} width="Big"></Button>
                    </div>
                </div>
            </div>
    )
}
