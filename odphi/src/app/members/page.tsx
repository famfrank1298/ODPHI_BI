import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Manrope({ subsets: ["latin"] });
import Brothers from "./Brothers";
import Header from "../Header";
import Footer from "../Footer";
import Link from "next/link";

export default function Members() {
    return (
    <main className="flex min-h-screen flex-col items-center">
        <Header/>
        <div className={inter.className + " leading-[5rem] text-[60px] w-[55rem] font-semibold absolute mott-header"}>ONE CULTURE, ANY RACE</div>
        {/* <Brothers/> */}
        <ul>
            <Link href="#"><li>Founding</li></Link>
            <Link href="#"><li>Charter</li></Link>
            <Link href="#"><li>Alpha</li></Link>
            <Link href="#"><li>Beta</li></Link>
            <Link href="#"><li>Gamma</li></Link>
            <Link href="#"><li>Delta</li></Link>
            <Link href="#"><li>Epsilon</li></Link>
            <Link href="#"><li>Zeta</li></Link>
            <Link href="#"><li>Eta</li></Link>
            <Link href="#"><li>Theta</li></Link>
            <Link href="#"><li>Iota</li></Link>
            <Link href="#"><li>Kappa</li></Link>
            <Link href="#"><li>Lamda</li></Link>
            <Link href="#"><li>Mu</li></Link>
            <Link href="#"><li>Nu</li></Link>
            <Link href="#"><li>Xi</li></Link>
        </ul>
        <Footer/>
    </main>
    )
}