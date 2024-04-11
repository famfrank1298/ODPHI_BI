
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import Image from "next/image";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Manrope({ subsets: ["latin"] });
import Link from "next/link";

export default function Header() {
    return (
        <header className="red-background-image w-full h-[5rem]">
            <div className={ jakarta.className + ` px-6 flex h-[5rem] items-center` } >
                <Link href="/"><img src="/odp_0.png" alt="ODPHI Logo" className="odp_logo" /></Link>
                <div className={"mott-header"}>OMEGA DELTA PHI</div>
                <Link href="/gallery" className="nav-menu"><button> Gallery </button></Link>
                <Link href="/socials"><button className="nav-menu"> Social </button></Link>
                <Link href="/serviceEvents"><button className="nav-menu"> Services </button></Link>
                <Link href="/members"><button className=" nav-menu cursor-pointer font-medium hover:text-[#FF2400] border-[1px] hover:bg-white hover:rounded-[5px] px-3 py-[0.5rem] transition-all"> Members </button></Link>
            </div>
        </header>
    )
}