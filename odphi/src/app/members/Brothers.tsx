
"use client"
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Manrope({ subsets: ["latin"] });

import { useEffect, useState } from "react";
import "./members.css"
import broList from "./bro.json"
import FoundingCard from "./FoundingCard"
import CharterCard from "./CharterCard"
import LambdaCard from "./LambdaCard"
import MuCard from "./MuCard"
import NuCard from "./NuCard"
import XiCard from "./XiCard"
import ActiveMembers from "./ActiveMembers"

export default function Brothers() {
    const brothers = broList;
    const founding = broList.filter(bro => bro["greek-line"] ===  "Founding Brothers");
    const charter = broList.filter(bro => bro["greek-line"] ===  "Charter Brothers");
    const lambda = broList.filter(bro => bro["greek-line"] ===  "LAMBDA");
    const mu = broList.filter(bro => bro["greek-line"] ===  "MU");
    const nu = broList.filter(bro => bro["greek-line"] ===  "NU");
    const xi = broList.filter(bro => bro["greek-line"] ===  "XI");
    const active = broList.filter(bro => bro["status"] === "active");


    return (
    <div>
        <FoundingCard info={founding} />
        <p className="text-center">____________________________________________________________________________________________________________________________________________________________________________________________________</p>
        <CharterCard info={charter} />
        <p className="text-center">____________________________________________________________________________________________________________________________________________________________________________________________________</p>
        <LambdaCard info={lambda}/>
        <p className="text-center">____________________________________________________________________________________________________________________________________________________________________________________________________</p>
        <MuCard info={mu}/>
        <p className="text-center">____________________________________________________________________________________________________________________________________________________________________________________________________</p>
        <NuCard info={nu}/>
        <p className="text-center">____________________________________________________________________________________________________________________________________________________________________________________________________</p>
        <XiCard info={xi}/>
        <p className="text-center">____________________________________________________________________________________________________________________________________________________________________________________________________</p>
        
        <div className={inter.className + " leading-[5rem] text-[40px] w-[55rem] font-semibold line-titles ml-[1rem]"}>Next Line Incoming!</div>
        <img src="/members/incoming.JPG" className="incoming pulse"/>

    </div>
    )
}