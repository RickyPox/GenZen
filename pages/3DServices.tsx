
import Services3DComponent from "@/components/3DServices";
import Navbar from "@/components/Navbar";

export default function Services3D (){
    return(
        <div>
            <Navbar></Navbar>
            <div className="page-border page fixed"/>
            <div>
                <img className="fixed w-full px-[50px] mt-[60px] left-0 right-0 m-auto -z-[10]" src="/3DServices/3DServicesTitle.png" alt="Title"/>
            </div>
            
            <section className="flex space-x-10 w-screen h-screen justify-center items-center px-[20px]">
                <Services3DComponent image="ReignOfTitansEnvironments" name="Reign Of Titans" categorie="3D Environments" buttonTitle="Comming Soon"></Services3DComponent>
                <Services3DComponent image="ReignOfTitansRigging" name="Reign Of Titans" categorie="3D Rigging" buttonTitle="Comming Soon"></Services3DComponent>
                <Services3DComponent image="ReignOfTitansModelling" name="Reign Of Titans" categorie="3D Modelling" buttonTitle="Comming Soon"></Services3DComponent>
            </section>

            <section className="flex space-x-10 w-screen h-screen justify-center items-center px-[20px]">
                <Services3DComponent image="Nekkro" name="Nekkro" categorie="3D Modelling" buttonTitle="Comming Soon"></Services3DComponent>
                <Services3DComponent image="Zulpdex" name="Nekkro" categorie="3D Modelling" buttonTitle="Comming Soon"></Services3DComponent>
            </section>

        </div>
    )
}