import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Manrope({ subsets: ["latin"] });
import Brothers from "./Brothers";
import Header from "../Header";
import Footer from "../Footer";
import "./members.css"

export default function Members() {
    const listStyling = "cursor-pointer ml-7 mr-5 font-medium text-black hover:text-[#FF2400] text-[40px] hover:bg-white hover:rounded-[5px] px-3 py-[0.5rem] transition-all";
    return (
    <main className="flex min-h-screen flex-col items-center">
        <Header/>
        <div className={inter.className + " leading-[5rem] text-[60px] w-[55rem] font-semibold absolute mott-header"}>ONE CULTURE, ANY RACE</div>
        <Brothers/>
        <Footer/>
    </main>
    )
}