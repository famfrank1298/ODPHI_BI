
"use client"
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Manrope({ subsets: ["latin"] });

import "./members.css"
import broList from "./bro.json"
import FoundingCard from "./FoundingCard"
import CharterCard from "./CharterCard"
import LambdaCard from "./LambdaCard"
import MuCard from "./MuCard"
import NuCard from "./NuCard"
import XiCard from "./XiCard"
import Image from "next/image";
import OmicronCard from "./Omicron";

export default function Brothers() {
    const founding = broList.filter(bro => bro["greek-line"] ===  "Founding Brothers");
    const charter = broList.filter(bro => bro["greek-line"] ===  "Charter Brothers");
    const lambda = broList.filter(bro => bro["greek-line"] ===  "LAMBDA");
    const mu = broList.filter(bro => bro["greek-line"] ===  "MU");
    const nu = broList.filter(bro => bro["greek-line"] ===  "NU");
    const xi = broList.filter(bro => bro["greek-line"] ===  "XI");
    const omicron = broList.filter(bro => bro["greek-line"] ===  "OMICRON");

    return (
    <div>
        <FoundingCard info={founding} />
        <hr className="h-2rem w-full border-t-2 border-black font-bold mt-[1rem]"/>
        <CharterCard info={charter} />
        <hr className="h-2rem w-full border-t-2 border-black font-bold mt-[1rem]"/>
        <LambdaCard info={lambda}/>
        <hr className="h-2rem w-full border-t-2 border-black font-bold mt-[1rem]"/>
        <MuCard info={mu}/>
        <hr className="h-2rem w-full border-t-2 border-black font-bold mt-[1rem]"/>
        <NuCard info={nu}/>
        <hr className="h-2rem w-full border-t-2 border-black font-bold mt-[1rem]"/>
        <XiCard info={xi}/>
        <hr className="h-2rem w-full border-t-2 border-black font-bold mt-[1rem]"/>
        <OmicronCard info={omicron}/>
        <hr className="h-2rem w-full border-t-2 border-black font-bold mt-[1rem]"/>
        
        <div className={inter.className + " leading-[5rem] section-title line-titles"}>Next Line Incoming!</div>
        <img src="/members/incoming.JPG" className="incoming pulse" alt="New Line Incoming"/>

    </div>
    )
}