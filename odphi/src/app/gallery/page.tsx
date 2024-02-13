import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Manrope({ subsets: ["latin"] });
import Header from "../Header";
import Gallery from "./Gallery";
import Footer from "../Footer";

export default function Home() {

  const memories: string[] = [
    "defaultGallery/img1.jpg",
    "defaultGallery/img2.JPG",
    "defaultGallery/img3.jpg",
    "defaultGallery/img4.jpg",
    "defaultGallery/img5.JPG",
    "defaultGallery/img6.jpg",
    "defaultGallery/img7.JPG",
    "defaultGallery/img8.JPG",
    "defaultGallery/img9.JPG",
    "defaultGallery/img10.JPG",
    "defaultGallery/img11.JPG",
    "defaultGallery/img12.jpg",
    "defaultGallery/img13.JPG",
    "defaultGallery/img14.jpg",
    "defaultGallery/img15.JPG",
    "defaultGallery/img16.jpg",
    // "defaultGallery/img17.JPG",
    "defaultGallery/img18.JPG",
    "defaultGallery/img19.jpg",
    "defaultGallery/img20.jpg",
    "defaultGallery/img21.jpg",
    // "defaultGallery/img22.JPG",
    "defaultGallery/img23.JPG",
    "defaultGallery/img24.JPG",
    "defaultGallery/img25.JPG",
    "defaultGallery/img26.JPG",
    "defaultGallery/img27.JPG",
    "defaultGallery/img28.jpg",
    "defaultGallery/img29.JPG",
  ]

  const goofy: string[] = [
    "goofyGallery/img1.jpg",
    "goofyGallery/img2.jpg",
    // "goofyGallery/img3.JPG",
    // "goofyGallery/img4.JPG",
    // "goofyGallery/img5.JPG",
    // "goofyGallery/img6.JPG",
    "goofyGallery/img7.JPG",
    "goofyGallery/img8.JPG",
    "goofyGallery/img9.JPG",
    "goofyGallery/img10.JPG",
    "goofyGallery/img11.JPG",
    "goofyGallery/img12.JPG",
    "goofyGallery/img13.JPG",
    // "goofyGallery/img14.jpg",
    "goofyGallery/img15.JPG",
    "goofyGallery/img16.JPG",
    "goofyGallery/img17.JPG",
    "goofyGallery/img18.JPG",
    "goofyGallery/img19.JPG",
    "goofyGallery/img20.JPG",
    "goofyGallery/img21.JPG",
    "goofyGallery/img22.jpg",
  ]

  return (
    <main className="flex min-h-screen flex-col items-center">
        <Header/>
       
        <div className={inter.className + " leading-[5rem] gallery-title section-header"}>ODPHI Memories</div>
        <p className={inter.className + " gallery-body"}>Take a stroll through our collection of cherished moments captured during photoshoots, events, group gatherings, ceremonies, and simply enjoying life's pleasures. These snapshots offer a glimpse into the genuine joy and camaraderie shared among us. Join us in reminiscing about these heartwarming memories!</p>
        <Gallery images={memories}/>

        <div className={inter.className + " leading-[5rem] gallery-title section-header"}>Picture-Perfect Realness</div>
        <p className={inter.className + " gallery-body"}>Explore a heartfelt portrayal of ODPHI's essence, showcasing candid moments that reflect our shared spirit of camaraderie and authenticity. These genuine snapshots capture our playful, unified selves, celebrating the unique bonds that define our fraternity's identity. Join us in savoring these unscripted glimpses into what makes our brotherhood truly special.</p>
        <Gallery images={goofy}/>

        <p className={inter.className + " text-[20px] mb-[2rem] mt-[5rem] ml-[5rem] mr-[5rem] text-center"}><i>&quot;And that&apos;s on Joe Cereceres&quot;</i> - Jose Mendez</p>
        <Footer/>
    </main>
  ) 
}