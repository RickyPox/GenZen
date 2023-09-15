import Link from "next/link"

export default function Button (props:any){


    const href = props.href || "#";
    return(
        <div className="flex justify-center ">
            <Link href={href} className="text-white flex justify-center items-center space-x-1 font-[Maharlika] uppercase buttonToBorder">
                    <svg className="rotate-180" width="26" height="15" viewBox="0 0 26 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.33414 -7.28488e-07C10.2724 7.45471 15.8092 6.68709 26 7.37332C15.8092 8.05955 10.2724 7.54562 9.33414 15C8.39623 7.54529 3.42391 7.37332 2.24072e-06 7.37332C3.42198 7.37332 8.39623 7.45471 9.33414 -7.28488e-07Z" fill="white"/>
                    </svg>
                    <span className="h-[15px]">{props.title}</span>
                    <svg width="26" height="15" viewBox="0 0 26 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.33414 -7.28488e-07C10.2724 7.45471 15.8092 6.68709 26 7.37332C15.8092 8.05955 10.2724 7.54562 9.33414 15C8.39623 7.54529 3.42391 7.37332 2.24072e-06 7.37332C3.42198 7.37332 8.39623 7.45471 9.33414 -7.28488e-07Z" fill="white"/>
                    </svg>
            </Link>
        </div>
    )
}