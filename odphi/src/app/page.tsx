"use client";

import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import { useEffect, useState } from "react";
import Carousel from './Carousel';
import Pillar from './Pillar';

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Manrope({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <header className="red-background-image w-full h-[5rem]">
        <nav
          className={ jakarta.className + ` px-6 flex h-[5rem] items-center` } >
          <img src="/odp_0.png" alt="ODPHI Logo" className="w-[3rem] ml-5" />
          
          <button className="ml-auto font-light text-white text-[17px]"> Members </button>
          <button className="ml-7 font-light text-white text-[17px]"> Newsletter </button>
          <button className="cursor-pointer ml-7 mr-5 font-medium text-white hover:text-[#012898] text-[17px] border-[1px] hover:bg-white hover:rounded-[5px] px-3 py-[0.5rem] transition-all"> About </button>
        </nav>
      </header>
      <div className={inter.className + " leading-[5rem] text-[60px] w-[55rem] font-semibold absolute mott_header"}>ONE CULTURE, ANY RACE</div>
      <Carousel/>

      <div className={inter.className + " leading-[5rem] text-[60px] w-[55rem] font-semibold mott_header"}>SACRAMENTS</div>
      <p className={inter.className + " text-[20px] ml-[10rem] mr-[10rem]"}>Our pillars represent the core values and principles that guide the mission and identity of a Omega Delta Phi. These pillars are foundational elements that members are expected to uphold and integrate into their lives. These pillars serve as a roadmap for us, offering a clear framework for personal and collective growth. The pillars foster a sense of belonging, uniting individuals around common ideals and providing a sense of continuity from generation to generation. Beyond individual benefits, the pillars serve as a moral compass, guiding actions and decisions in alignment with our overarching goals. Embracing these pillars creates a cohesive and supportive community where members collaborate to achieve their potential, contribute positively to society, and leave a lasting legacy.</p>
      <Pillar/>
    </main>
  )
}
