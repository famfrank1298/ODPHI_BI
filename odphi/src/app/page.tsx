"use client";

import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import { useEffect, useState } from "react";
import Carousel from './Carousel';
import Pillar from './Pillar';
import Link from "next/link";
import Header from "./Header";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Manrope({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header/>
      <div className={inter.className + " leading-[5rem] text-[60px] w-[55rem] font-semibold absolute mott_header"}>ONE CULTURE, ANY RACE</div>

      <Carousel/>
      <div className={inter.className + " leading-[5rem] text-[60px] w-[55rem] font-semibold mott_header"}>SACRAMENTS</div>
      <p className={inter.className + " text-[20px] ml-[10rem] mr-[10rem]"}>Our pillars represent the core values and principles that guide the mission and identity of a Omega Delta Phi. These pillars are foundational elements that members are expected to uphold and integrate into their lives. These pillars serve as a roadmap for us, offering a clear framework for personal and collective growth. The pillars foster a sense of belonging, uniting individuals around common ideals and providing a sense of continuity from generation to generation. Beyond individual benefits, the pillars serve as a moral compass, guiding actions and decisions in alignment with our overarching goals. Embracing these pillars creates a cohesive and supportive community where members collaborate to achieve their potential, contribute positively to society, and leave a lasting legacy.</p>
      <Pillar/>
    </main>
  )
}
