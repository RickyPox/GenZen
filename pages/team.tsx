import Navbar from "@/components/Navbar";
import NumberCounter from "@/components/NumberCounter";
import Image from "next/image";

export default function Team (){

    const team=[
        {
        image:"/team/ZenBenmore.png",
        name:"ZEN BENMORE",
        role:"Founder",}
    ]


return(
    <div>
        <Navbar></Navbar>
        <div className="mx-[auto] px-[150px] max-w-[1440px] py-[70px] text-white ">
            <section className="flex space-x-[35px]">
                <div className="text-black bg-white w-1/3 text-center">
                    <p className="text-[64px]"><NumberCounter targetNumber={25}/></p>
                    <p className="text-[28px]">combined years <br></br>of experience</p>
                </div>
                <div className="text-black bg-white w-1/3 text-center">
                    <p className="text-[64px]"><NumberCounter targetNumber={500}/></p>
                    <p className="text-[28px]">projects <br></br>completed</p>
                </div>
                <div className="text-black bg-white w-1/3 text-center">
                    <p className="text-[64px]"><NumberCounter targetNumber={500}/></p>
                    <p className="text-[28px]">satisfied <br></br>clients</p>
                </div>
            </section>
            <section>
                <h1 className="text-[48px] text-center mt-[70px]">the team behind gen zen</h1>
            </section>
            <div className="mt-[40px] mb-[80px]">
                <svg width="100%" height="40" viewBox="0 0 1107 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="7" y1="20" x2="1100" y2="20" stroke="#F3AF00" stroke-width="4"/>
                    <path d="M1107 19.9768C1106.59 19.8926 1106.17 19.8119 1105.76 19.7225C1104.82 19.5164 1103.89 19.281 1103.02 18.8481C1102.04 18.3584 1101.38 17.5819 1100.96 16.582C1100.52 15.5306 1100.3 14.4225 1100.08 13.311C1100.06 13.2079 1100.04 13.1048 1099.98 13C1099.91 13.3367 1099.85 13.6752 1099.77 14.0119C1099.59 14.8915 1099.37 15.7625 1099.03 16.5975C1098.55 17.7348 1097.75 18.5406 1096.62 19.0164C1095.55 19.4614 1094.43 19.6882 1093.31 19.9115C1093.2 19.9321 1093.1 19.9528 1093 20.0077C1093.45 20.1022 1093.9 20.1898 1094.35 20.2895C1095.25 20.4922 1096.15 20.7259 1096.98 21.1433C1097.95 21.6295 1098.61 22.3923 1099.02 23.3785C1099.48 24.4574 1099.71 25.5981 1099.93 26.7406C1099.95 26.8265 1099.96 26.9107 1100.01 27C1100.06 26.7629 1100.11 26.5258 1100.15 26.2905C1100.36 25.3181 1100.57 24.3491 1100.95 23.4248C1101.43 22.2514 1102.25 21.4268 1103.43 20.9475C1104.5 20.5128 1105.62 20.2843 1106.74 20.0627C1106.83 20.0455 1106.91 20.0283 1107 20.0112C1107 20.0009 1107 19.9888 1107 19.9768Z" fill="#F3AF00"/>
                    <path d="M13.9966 19.9768C13.5855 19.8926 13.1743 19.8119 12.765 19.7225C11.8241 19.5164 10.8918 19.281 10.0214 18.8481C9.03747 18.3584 8.37695 17.5819 7.96068 16.582C7.52205 15.5306 7.29672 14.4225 7.07827 13.311C7.05762 13.2079 7.03698 13.1048 6.9785 13C6.91142 13.3367 6.84605 13.6752 6.77381 14.0119C6.58631 14.8915 6.37302 15.7625 6.02728 16.5975C5.55424 17.7348 4.75439 18.5406 3.61568 19.0164C2.55093 19.4614 1.42941 19.6882 0.306181 19.9115C0.202974 19.9321 0.101487 19.9528 0 20.0077C0.45067 20.1022 0.90134 20.1898 1.35029 20.2895C2.25335 20.4922 3.14609 20.7259 3.98206 21.1433C4.95221 21.6295 5.60757 22.3923 6.02384 23.3785C6.47795 24.4574 6.705 25.5981 6.92862 26.7406C6.94582 26.8265 6.96302 26.9107 7.0129 27C7.05934 26.7629 7.10579 26.5258 7.15395 26.2905C7.3552 25.3181 7.57366 24.3491 7.95208 23.4248C8.43199 22.2514 9.25249 21.4268 10.429 20.9475C11.4972 20.5128 12.6187 20.2843 13.742 20.0627C13.828 20.0455 13.914 20.0283 14 20.0112C13.9966 20.0009 13.9966 19.9888 13.9966 19.9768Z" fill="#F3AF00"/>
                    <path d="M569.99 19.9337C568.786 19.6932 567.582 19.4625 566.383 19.2073C563.628 18.6182 560.897 17.9458 558.348 16.7088C555.467 15.3099 553.532 13.0912 552.313 10.2344C551.029 7.23033 550.369 4.0643 549.729 0.888453C549.669 0.593938 549.608 0.299423 549.437 0C549.241 0.962081 549.049 1.92907 548.838 2.89115C548.288 5.40434 547.664 7.89299 546.651 10.2786C545.266 13.528 542.924 15.8302 539.589 17.1898C536.471 18.4612 533.186 19.1091 529.897 19.7472C529.594 19.8061 529.297 19.865 529 20.0221C530.32 20.2921 531.64 20.5424 532.954 20.8271C535.599 21.4063 538.214 22.0739 540.662 23.2667C543.503 24.6558 545.422 26.8352 546.641 29.6527C547.971 32.7353 548.636 35.9946 549.291 39.2588C549.341 39.5042 549.392 39.7448 549.538 40C549.674 39.3226 549.81 38.6452 549.951 37.9728C550.54 35.1945 551.18 32.4261 552.288 29.7852C553.694 26.4327 556.097 24.0766 559.542 22.7071C562.67 21.4652 565.955 20.8124 569.244 20.1792C569.496 20.1301 569.748 20.081 570 20.0319C569.99 20.0025 569.99 19.9681 569.99 19.9337Z" fill="#F3AF00"/>
                </svg>
            </div>
            <section>
            <div>
                {team.map((team) => (
                    <div 
                    key={team.name}
                    className="text-white">
                        <p>{team.name}</p>
                    </div>
                    ))}
            </div>

            </section>
        </div>
    </div>
)
}