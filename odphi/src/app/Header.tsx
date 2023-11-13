
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Manrope({ subsets: ["latin"] });
import Link from "next/link";

export default function Header() {
    return (
        <header className="red-background-image w-full h-[5rem]">
            <nav
            className={ jakarta.className + ` px-6 flex h-[5rem] items-center` } >
            <Link href="/"><img src="/odp_0.png" alt="ODPHI Logo" className="w-[3rem] ml-5" /></Link>
            <Link href="/gallery" className="ml-auto font-light text-white text-[17px]"><button> Gallery </button></Link>
            <Link href="/socials"><button className="ml-7 font-light text-white text-[17px]"> Social </button></Link>
            <Link href="/serviceEvents"><button className="ml-7 font-light text-white text-[17px]"> Services </button></Link>
            <Link href="/members"><button className="cursor-pointer ml-7 mr-5 font-medium text-white hover:text-[#FF2400] text-[17px] border-[1px] hover:bg-white hover:rounded-[5px] px-3 py-[0.5rem] transition-all"> Members </button></Link>
            </nav>
        </header>
    )
}