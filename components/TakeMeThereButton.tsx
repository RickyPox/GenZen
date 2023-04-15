import Link from "next/link"
import Image from "next/image"

export default function TakeMeThereButton ({
    href,
  }: {
    href: string
  }) {
    return(
        <Link href={href}>
            <div className="bg-[#F3AF00] flex space-x-[10px] p-[10px]">
                <p  className=" text-black">
                    Take me There
                </p>
                <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.0607 13.0607C31.6464 12.4749 31.6464 11.5251 31.0607 10.9393L21.5147 1.3934C20.9289 0.807614 19.9792 0.807614 19.3934 1.3934C18.8076 1.97919 18.8076 2.92893 19.3934 3.51472L27.8787 12L19.3934 20.4853C18.8076 21.0711 18.8076 22.0208 19.3934 22.6066C19.9792 23.1924 20.9289 23.1924 21.5147 22.6066L31.0607 13.0607ZM-1.31134e-07 13.5L30 13.5L30 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z" fill="black"/>
                </svg>

            </div>
        </Link>
)
}

TakeMeThereButton.defaultProps={
    href: '#',
}

