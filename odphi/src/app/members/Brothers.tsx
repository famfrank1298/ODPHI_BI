
"use client"

import { useEffect, useState } from "react";
import "./Brothers.css"
import broList from "./bro.json"
import FoundingCard from "./FoundingCard"
import ActiveMembers from "./ActiveMembers"

import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Manrope({ subsets: ["latin"] });

export default function Brothers() {
    const brothers = broList;
    const founding = broList.filter(bro => bro["greek-line"] ===  "Founding Brothers");
    const charter = broList.filter(bro => bro["greek-line"] ===  "Charter Brothers");


    return (
    <div>
        {/* <div className={inter.className + " leading-[5rem] text-[40px] w-[55rem] font-semibold line-titles ml-[1rem]"}>OUR FOUNDING BROTHERS</div> */}
        {/* <div className={inter.className + " text-[20px] w-[45rem] line-titles ml-[1rem]"}>THE I.N.F.A.M.O.U.S Line</div> */}
        {/* <FoundingCard info={founding} />; */}
        <div className={inter.className + " leading-[5rem] text-[40px] w-[55rem] font-semibold line-titles"}>ACTIVE MEMBERS</div>
        <div className="text-[20px] text-center">CURRENTLY CONSIST OF 9 MEMBERS</div>
        <div className="activeGallery">
            <ActiveMembers/>
        </div>
    </div>
    )
}