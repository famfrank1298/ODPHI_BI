
"use client"

import { useEffect, useState } from "react";
import "./members.css"
import broList from "./bro.json"
import FoundingCard from "./FoundingCard"
import CharterCard from "./CharterCard"
import MuCard from "./MuCard"
import NuCard from "./NuCard"
import XiCard from "./XiCard"
import ActiveMembers from "./ActiveMembers"

export default function Brothers() {
    const brothers = broList;
    const founding = broList.filter(bro => bro["greek-line"] ===  "Founding Brothers");
    const charter = broList.filter(bro => bro["greek-line"] ===  "Charter Brothers");
    const mu = broList.filter(bro => bro["greek-line"] ===  "MU");
    const nu = broList.filter(bro => bro["greek-line"] ===  "NU");
    const xi = broList.filter(bro => bro["greek-line"] ===  "XI");
    const active = broList.filter(bro => bro["status"] === "active");


    return (
    <div>
        <div className="found-charter-grid">
            <FoundingCard info={founding} />
            <CharterCard info={charter} />
        </div>
        <p className="text-center">____________________________________________________________________________________________________________________________________________________________________________________________________</p>
        <MuCard info={mu}/>
        <p className="text-center">____________________________________________________________________________________________________________________________________________________________________________________________________</p>
        <NuCard info={nu}/>
        <p className="text-center">____________________________________________________________________________________________________________________________________________________________________________________________________</p>
        <XiCard info={xi}/>
        <p className="text-center">____________________________________________________________________________________________________________________________________________________________________________________________________</p>
    </div>
    )
}