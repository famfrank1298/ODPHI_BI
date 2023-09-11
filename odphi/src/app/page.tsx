"use client";

import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import Carousel from './Carousel';
import QuickFacts from './QuickFacts';
import CenterCarousel from './CenterCarousel';
import Pillar from './Pillar';
import Header from "./Header";
import Footer from "./Footer"

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Manrope({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header/>
      <div className={inter.className + " leading-[5rem] text-[60px] w-[55rem] font-semibold absolute mott-header"}>ONE CULTURE, ANY RACE</div>
      <Carousel/>

      <div className={inter.className + "leading-[5rem] text-[60px] font-semibold section-header mt-[10rem] text-center"}>Welcome to Omega Delta Phi Fraternity at UIC!</div>
      <p className={inter.className + " text-[25px] ml-[15rem] mr-[15rem] text-center mt-[2rem]"}>We're thrilled that you've taken the first step in getting to know us better. As you explore our online home, we invite you to embark on a journey that will introduce you to the rich history, vibrant culture, and unwavering brotherhood that defines Omega Delta Phi.
At Omega Delta Phi, we are more than just a fraternity; we are a lifelong commitment to personal growth, academic excellence, leadership development, and community service. For over three decades, our fraternity has stood as a beacon of diversity, inclusion, and unity, proudly championing our principles of <b>Unity</b>, <b>Honesty</b>, <b>Integrity</b>, and <b>Leadership</b>.
<br/><br/>As you navigate through these digital halls, you'll discover the incredible impact we have made on campuses and in communities across the nation. Our members are driven by a passion for making a difference and creating lasting friendships. Whether it's through philanthropic endeavors, cultural awareness initiatives, or academic support, Omega Delta Phi strives to leave a positive mark on the world.
<br/><br/>So, if you're seeking an opportunity to be part of something larger than yourself, to forge lifelong friendships, and to grow into a leader who makes a difference, you've come to the right place. Explore our website, learn about our history, meet our brothers, and discover how you can become a part of our enduring legacy.<br/><br/></p>

      <div className={inter.className + " leading-[5rem] text-[60px] font-semibold section-header"}>SACRAMENTS</div>
      <p className={inter.className + " text-[25px] ml-[15rem] mr-[15rem] text-center"}><b>Unity</b>, <b>Honesty</b>, <b>Integrity</b>, and <b>Leadership</b> represent the core values and principles that guide the mission and identity of a Omega Delta Phi. Embracing these pillars creates a cohesive and supportive community where members collaborate to achieve their potential, contribute positively to society, and leave a lasting legacy.</p>
      <Pillar/>
      
      <div className="factsSection">
        <QuickFacts/>
        <CenterCarousel/>
      </div>

      <Footer/>
    </main>
  )
}
