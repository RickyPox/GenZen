export default function ContactForm (){
return(
    <div className="flex relative w-screen h-screen">
        <img className='w-[100%] absolute left-0 bottom-0 ml-[20px] mb-[20px] z-[10] pointer-events-none' src="/contact/sendRavenChar.png" alt="Hero"/>
        <div className="w-full flex">
            <div className="mt-[80px] ml-[150px] w-1/2">
                <img className="z-10 w-[100%] pointer-events-none relative" src="/contact/sendRavenTitle.png" alt="Title"></img>
            </div>
            <form className="w-1/2 contact flex flex-col mt-[80px] pr-[80px] space-y-[40px] relative">
                <div className="w-full flex space-x-[20px]">   
                    <input className="w-1/2 h-[100px]" type="text" id="name" name="name" placeholder="Name"></input>
                    <input className="w-1/2 h-[100px]" type="text" id="projectname" name="projectname" placeholder="ProjectName"></input>
                </div>
                <div className="w-full flex space-x-[20px]">   
                    <input className="w-full h-[100px]" type="text" id="email" name="email" placeholder="email"></input>
                </div> 
                <div className="w-full flex space-x-[20px]">   
                    <input className="w-full h-[100px]" type="text" id="links" name="links" placeholder="links [social media, website etc.]"></input>
                </div> 
                <div className="w-full flex space-x-[20px]">   
                    <textarea className="w-full h-[250px]" id="links" name="links" placeholder="how may we be of service ?"></textarea>
                </div>
                <div className="w-full flex justify-end">
                    <input type="submit" value="Send Raven"></input>
                </div>
            </form>
        </div>
    </div>
)
}