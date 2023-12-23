import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Manrope({ subsets: ["latin"] });
import Brothers from "./Brothers";
import Header from "../Header";
import Footer from "../Footer";
import "./members.css"

export default function Members() {
    return (
    // <main className="flex min-h-screen flex-col items-center">
    <main className="min-h-screen">
        <Header/>
        <Brothers/>
        <Footer/>
    </main>
    )
}