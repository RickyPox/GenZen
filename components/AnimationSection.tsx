import AnimationComponent from "./AnimationComponent";

export default function AnimationSection (){
    return(
        <div className="scroll-container">
            <section className="grid grid-cols-3 w-screen justify-center items-center">
                <div> 
                    <AnimationComponent title={"Famous Foxes"} categorie={"Marketing Trailer"}></AnimationComponent>
                </div> 
                <div> 
                    <AnimationComponent title={"Elixir"} categorie={"Marketing Trailer"}></AnimationComponent>
                </div> 
                <div> 
                    <AnimationComponent title={"Sandbar"} categorie={"Marketing Trailer"}></AnimationComponent>
                </div> 
            </section>

            <section className="grid grid-cols-3 w-screen h-screen justify-center items-center">
                <div> 
                    <AnimationComponent title={"Famous Foxes"} categorie={"Marketing Trailer"}></AnimationComponent>
                </div> 
                <div> 
                    <AnimationComponent title={"Elixir"} categorie={"Marketing Trailer"}></AnimationComponent>
                </div> 
                <div> 
                    <AnimationComponent title={"Sandbar"} categorie={"Marketing Trailer"}></AnimationComponent>
                </div> 
            </section>
        </div>
    )
}