import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Manrope({ subsets: ["latin"] });
import Header from "../Header";
import Gallery from "../gallery/Gallery";

export default function Home() {

  const services: string[] = [
    "ServiceGallery/img1.jpg",
    "ServiceGallery/img2.jpg",
    "ServiceGallery/img3.jpg",
    "ServiceGallery/img4.jpg",
    "ServiceGallery/img5.jpg",
    "ServiceGallery/img6.jpg",
    "ServiceGallery/img7.jpg",
    "ServiceGallery/img8.JPG",
    "ServiceGallery/img9.JPG",
    "ServiceGallery/img13.JPG",
    "ServiceGallery/img14.JPG",
    "ServiceGallery/img15.JPG",
    "ServiceGallery/img16.JPG",
  ]

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header/>
      <div className={inter.className + " leading-[5rem] text-[60px] w-[55rem] font-semibold absolute mott-header"}>ONE CULTURE, ANY RACE</div>

      <div className={inter.className + " leading-[5rem] text-[50px] font-semibold section-header"}>Services</div>
      <p className={inter.className + " text-[25px] mb-[2rem] ml-[10rem] mr-[10rem] text-center"}>Community service and volunteer engagement are central to Omega Delta Phi's values, reflecting our commitment to Unity, Honesty, Integrity, and Leadership. Through these activities, we not only demonstrate our dedication to unity across diverse backgrounds and uphold our integrity through sincere efforts to create positive change, but we also actively expand our network, interact, and engage with other fraternities and soroities, and build strong rapport with service organizations.
      <br/><br/> These experiences not only embody our commitment to building leaders who excel academically and professionally while making a lasting impact on the world, but they also unite us in brotherhood and leave a legacy of compassion and goodwill, enhancing our connections and collaborations with like-minded entities dedicated to making a difference in our communities. 
      <br/><br/>Our goal each semester is for each brother to complete 30 hours of service, but we always aim for more!</p>
      <Gallery images={services}/>

      <div className={inter.className + " leading-[5rem] text-[30px] font-semibold section-header"}>Partners</div>
      <p className={inter.className + " text-[20px] mb-[2rem] ml-[10rem] mr-[10rem] text-center"}>We proudly highlight some of the esteemed organizations we've collaborated with, participating in their inspiring events with great enthusiasm. We look forward to nurturing these connections and forging new partnerships in the future to further our shared goals.</p>
      <div className="partner-section">
        <img src="serviceLogos/cardsforkidz_logo.jpg"/>
        <img src="serviceLogos/12thward_logo.png"/>
        <img src="serviceLogos/ramracing_logo.png"/>
        <img src="serviceLogos/greatlakes_logo.png"/>
        <img src="serviceLogos/gcfd_logo.png"/>
        <img src="serviceLogos/careforfriends_logo.jpg"/>
        <img src="serviceLogos/forestpreserve_logo.png"/>
      </div>   
    </main>
  )
}