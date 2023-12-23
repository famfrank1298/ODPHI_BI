import { useEffect, useState } from 'react';
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Manrope({ subsets: ["latin"] });

export default function QuickFacts() {

  return (
    <div className='bg-img-qf'>
      <div className={inter.className + "leading-[5rem] quick-title section-header"}>Quick Facts</div>
      <div className="quick-text">
        <b>National Flower:</b> Silver Rose<br/>
        <b>National Mascot:</b> Silver Knight<br/>
        <b>Philanthropy:</b> Wounded Warriors<br/>
        <b>National Slogan:</b> &quot;One Culture, Any Race&quot;<br/>
        <b>ODPHI Founding Date:</b> November 25th, 1987<br/>
        <b>UIC Beta Iota Founding Date:</b> April 14th, 2011<br/>
        <b>Pillars:</b> Unity, Honesty, Integrity, and Leadership<br/>
        <b>National Motto:</b> &quot;Crescit Eundo&quot;... It Grows as it Goes<br/>
        <b>National Colors:</b> Scarlet, Silver, and Black (supporting color)<br/>
      </div>
    </div>
  )
}