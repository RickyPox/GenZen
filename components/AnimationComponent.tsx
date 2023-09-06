import { easeIn } from "framer-motion";
import { MouseParallaxContainer, MouseParallaxChild  } from "react-parallax-mouse";
import Button from "./Button";



export default function AnimationComponent (props:any) {

    return(
        <div>
            <div className="relative flex justify-center items-center w-[100%]">
                <img className="w-[100%] z-40" src="/animation/Ring.png" alt=""></img>
                <div className=" flex justify-center w-[100%] absolute ">
                    <img className=" w-[100%]"  src={`animation/${props.title}/Background.png`} alt=""></img>
                </div>

                <div className="flex justify-center -translate-y-[22%] left-0 right-0 m-auto absolute z-10">
                    <img className="w-[100%]" src={`animation/${props.title}/Char.png`} alt=""></img> 
                </div>
                <div className=" flex justify-center w-[100%] absolute">
                    <img className="w-[100%]" src="/animation/Border.png" alt=""></img>
                </div>
            </div>
        </div>
    )
}
