import { easeIn } from "framer-motion";
import { MouseParallaxContainer, MouseParallaxChild  } from "react-parallax-mouse";
import Button from "./Button";



export default function AnimationComponent (props:any) {

    return(
        <div>
            <MouseParallaxContainer resetOnLeave containerStyle={{overflow:"visible"}} globalFactorX={0.1} globalFactorY={0.1} className="relative flex justify-center items-center w-[100%]">
                <MouseParallaxChild factorY={0.5} factorX={0} className="z-40"><img className="w-[100%] " src="/animation/Ring.png" alt="Ring"></img></MouseParallaxChild>
                <div className=" flex justify-center w-[100%] absolute ">
                    <img className=" w-[100%]" src={`animation/${props.title}/Background.png`} alt="Background"></img>
                </div>
                <MouseParallaxChild factorX={0.3} factorY={0.3} className="flex justify-center left-0 right-0 m-auto absolute z-10">
                    <img className="w-[100%] -translate-y-[20%]" src={`animation/${props.title}/Char.png`} alt="Character"></img> 
                </MouseParallaxChild>
                <div className="flex justify-center w-[100%] absolute z-10">
                    <img className="w-[100%]" src="/animation/BlackGradient.png" alt="Gradient"></img>
                </div>
                

                <div className=" flex justify-center w-[100%] absolute">
                    <img className="w-[100%]" src="/animation/Border.png" alt="Border"></img>
                </div>
                <div className="absolute bottom-[35px] left-0 right-0 m-auto z-10">
                    <h2>{props.title}</h2>
                    <h3 className="mb-[10px]">{props.categorie}</h3>
                    <Button title={"Take Me There"} width="Big"></Button> 
                </div>
            </MouseParallaxContainer>
        </div>
    )
}
