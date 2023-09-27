export default function ContactForm (){
return(
    <div className="flex relative">
        <img className='w-[75%] absolute left-0 bottom-0 ml-[20px] mb-[20px] z-[10] pointer-events-none' src="/contact/sendRavenChar.png" alt="Hero"/>
        <div className="w-full flex">
            <div className="mt-[80px] ml-[150px] w-1/2">
                <img className="z-10 w-[100%] pointer-events-none relative" src="/contact/sendRavenTitle.png" alt="Title"></img>
            </div>
            <form className="w-[40%] contact flex flex-col mt-[80px] pr-[50px] space-y-[30px] relative">
                <div className="w-full flex space-x-[20px]">   
                    <input className="w-1/2 h-[100px]" type="text" id="name" name="name" placeholder="Name"></input>
                    <input className="w-1/2 h-[100px]" type="text" id="projectname" name="projectname" placeholder="Project Name"></input>
                </div>
                <div className="w-full flex space-x-[20px]">   
                    <input className="w-full h-[100px]" type="email" id="email" name="email" placeholder="email"></input>
                </div> 
                <div className="w-full flex space-x-[20px]">   
                    <input className="w-full h-[100px]" type="text" id="links" name="links" placeholder="links [social media, website etc.]"></input>
                </div> 
                <div className="w-full flex space-x-[20px]">   
                    <textarea className="w-full h-[250px]" id="links" name="links" placeholder="how may we be of service ?"></textarea>
                </div>
                <div className="w-full inline-flex justify-end ">
                    <input className="hover:scale-110 transition-all duration-200 cursor-pointer" type="submit" value="Send Raven"></input>
                </div>
            </form>
        </div>
    </div>
)
}