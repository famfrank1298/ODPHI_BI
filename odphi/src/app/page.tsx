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

  const heroImages = ['/carousel/img1.JPG', '/carousel/img2.jpg', '/carousel/img3.jpg', '/carousel/img4.JPG', '/carousel/img5.jpg', '/carousel/img6.jpg', '/carousel/img7.jpg', '/carousel/img8.JPG'];

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header/>
      <Carousel slides={heroImages}/>

      <div className={inter.className + "leading-[5rem] header-title section-header"}>Omega Delta Phi Fraternity Inc - BI Chapter!</div>
      <p className={inter.className + " header-body"}>Weclcome to Omega Delta Phi Incorporated Beta Iota Chapter at the University of Illinois at Chicago! Here we are more than a fraternity; we are a lifelong commitment to personal growth, academic excellence, leadership development, and community service. Our fraternity stands as a beacon of diversity, inclusion, and unity, proudly championing our principles of <b>Unity</b>, <b>Honesty</b>, <b>Integrity</b>, and <b>Leadership</b>.
      <br/><br/>As you navigate through these digital halls, you&apos;ll discover the incredible impact we have made on campuses and in our communities. Our members are driven by a passion for making a difference and creating lasting friendships. Whether it&apos;s through philanthropic endeavors (<b>Wounded Warriors</b>!), cultural awareness initiatives, or academic support, we strive to leave a positive mark on the world.
      <br/><br/>So, if you&apos;re seeking an opportunity to be part of something larger than yourself, to forge lifelong friendships, and to grow into a leader who makes a difference, you&apos;ve come to the right place. Feel free to learn about our history, meet our brothers, and discover how you can become a part of our enduring legacy.<br/><br/></p>

      <div className={inter.className + " leading-[5rem] header-title section-header"}>SACRAMENTS</div>
      <p className={inter.className + " header-body"}><b>Unity</b>, <b>Honesty</b>, <b>Integrity</b>, and <b>Leadership</b> represent the core values and principles that guide the mission and identity of Omega Delta Phi Inc.</p>
      <Pillar/>
      
      <div className="factsSection">
        <QuickFacts/>
        <CenterCarousel/>
      </div>

      <Footer/>
    </main>
  )
}
