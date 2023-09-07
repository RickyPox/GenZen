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

  const tiltStyle = {
    transform: `rotateX(${y * 10}deg) rotateY(${x * 30}deg)`,
  };
    return(
            <div className="container-tilt" onMouseMove={handleMouseMove} onMouseLeave={mouseLeave}>
            <MouseParallaxContainer 
            resetOnLeave 
            containerStyle={{overflow:"visible"}} 
            globalFactorX={0.1} 
            globalFactorY={0.1} 
            className="relative flex justify-center items-center w-[100%]"
            >
                <MouseParallaxChild factorY={0.5} factorX={0} className="z-40"><img className="w-[100%] " src="/animation/Ring.png" alt="Ring"></img></MouseParallaxChild>
                <div className=" flex justify-center w-[100%] absolute ">
                    <img className=" w-[100%]" src={`animation/${props.title}/Background.png`} alt="Background"></img>
                </div>  
                <MouseParallaxChild style={tiltStyle} factorX={1} factorY={0.3} className="flex justify-center left-0 right-0 m-auto absolute z-10 divToTilt">
                        <img 
                        style={{
                            width: "100%",
                            transform:` translateY(-${props.translateYChar})`
                        }} 
                        src={`animation/${props.title}/Char.png`} 
                        alt="Character"></img> 
                </MouseParallaxChild>
                <div className="flex justify-center w-[100%] absolute z-10">
                    <img className="w-[100%]" src="/animation/BlackGradient.png" alt="Gradient"></img>
                </div>
                <div className=" flex justify-center w-[100%] absolute">
                    <img className="w-[100%]" src="/animation/Border.png" alt="Border"></img>
                </div>
                {/* STARS */}
                <MouseParallaxChild style={tiltStyle} factorX={0.6} factorY={0.5} className="flex justify-center w-[100%] absolute z-40 divToTilt">
                    <img
                    style={{
                        width: "100%",
                        scale:"0.80",
                        transform:` translate(${props.translateXTopStar}, ${props.translateYTopStar})`
                    }}  src="/animation/Star.png" alt="Star"/>
                </MouseParallaxChild>
                <MouseParallaxChild style={tiltStyle} factorX={0.7} factorY={0.2} className="flex justify-center w-[100%] absolute z-40 divToTilt">
                    <img
                    style={{
                        width: "100%",
                        scale:"0.6",
                        transform:` translate(${props.translateXMiddleStar}, ${props.translateYMiddleStar})`
                    }}  src="/animation/Star.png" alt="Star"/>
                </MouseParallaxChild>
                <MouseParallaxChild style={tiltStyle} factorX={0.5} factorY={0.7} className="flex justify-center w-[100%] absolute z-40 divToTilt">
                    <img
                    style={{
                        width: "100%",
                        scale:"1",
                        transform:` translate(${props.translateXBottomStar}, ${props.translateYBottomStar})`
                    }}  src="/animation/Star.png" alt="Star"/>
                </MouseParallaxChild>

                {/* Text/Button */}
                <div className="absolute bottom-[5%] left-0 right-0 m-auto z-40 w-[100%]">
                    <h2>{props.title}</h2>
                    <h3 className="mb-[10px]">{props.categorie}</h3>
                   <Button title={"Take Me There"} width="Big"></Button>
                </div>
            </MouseParallaxContainer>
            </div>
    )
}
