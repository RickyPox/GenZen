import Button from "./Button";

export default function BrandingDesignComponent(props:any){
    return(
        <div>
                <div className="relative">
                    <div>
                        <img className="w-full" src={props.imgsrc} alt="Hero"></img>
                    </div>
                    <div className=" absolute bottom-[17%] left-0 right-0 m-auto">
                        <h2>{props.name}</h2>
                        <h3 className="mb-[10px]">{props.categorie}</h3>
                        <div className="flex justify-center ">
                            <Button title={props.buttonTitle} href={props.href}></Button>
                        </div>
                    </div>
                </div>
        </div>
    )
}