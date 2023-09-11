import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Manrope({ subsets: ["latin"] });
import Brothers from "./Brothers";
import Header from "../Header";
import Footer from "../Footer";

export default function Members() {
    return (
    <main className="flex min-h-screen flex-col items-center">
        <Header/>
        <div className={inter.className + " leading-[5rem] text-[60px] w-[55rem] font-semibold absolute mott-header"}>ONE CULTURE, ANY RACE</div>
        <Brothers/>
        <Footer/>
    </main>
    )
}