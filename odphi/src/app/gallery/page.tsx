import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Manrope({ subsets: ["latin"] });
import Header from "../Header";
import Gallery from "./Gallery";
import Footer from "../Footer";

export default function Home() {

  const memories: string[] = [
    "defaultGallery/img1.jpg",
    "defaultGallery/img3.jpg",
    "defaultGallery/img4.jpg",
    "defaultGallery/img5.JPG",
    "defaultGallery/img6.jpg",
    "defaultGallery/img8.JPG",
    "defaultGallery/img9.JPG",
    "defaultGallery/img10.JPG",
    "defaultGallery/img11.JPG",
    "defaultGallery/img12.jpg",
    "defaultGallery/img13.JPG",
    "defaultGallery/img14.jpg",
    "defaultGallery/img16.jpg",
    "defaultGallery/img17.jpg",
    "defaultGallery/img18.JPG",
    "defaultGallery/img19.jpg",
    "defaultGallery/img20.jpg",
  ]

  const goofy: string[] = [
    "goofyGallery/img1.jpg",
    "goofyGallery/img2.jpg",
    "goofyGallery/img3.jpg",
    "goofyGallery/img4.jpg",
    "goofyGallery/img5.jpg",
    "goofyGallery/img6.jpg",
    "goofyGallery/img7.JPG",
    "goofyGallery/img8.JPG",
    "goofyGallery/img9.JPG",
    "goofyGallery/img10.JPG",
    "goofyGallery/img11.JPG",
    "goofyGallery/img12.JPG",
    "goofyGallery/img13.JPG",
    "goofyGallery/img14.JPG",
    "goofyGallery/img15.JPG",
    "goofyGallery/img16.JPG",
    "goofyGallery/img17.JPG",
    "goofyGallery/img18.JPG",
    "goofyGallery/img19.JPG",
    "goofyGallery/img20.jpg",
    "goofyGallery/img21.jpg",
    "goofyGallery/img22.jpg",
  ]

  return (
    <main className="flex min-h-screen flex-col items-center">
        <Header/>
        <div className={inter.className + " leading-[5rem] text-[60px] w-[55rem] font-semibold absolute mott-header"}>ONE CULTURE, ANY RACE</div>
       
        <div className={inter.className + " leading-[5rem] text-[50px] font-semibold section-header"}>ODPHI Memories</div>
        <p className={inter.className + " text-[25px] mb-[2rem] text-center"}>Here are a couple of memorable photos from photoshoots, attending events, group pictures, and having a good time overall!</p>
        <Gallery images={memories}/>

        <div className="mb-[5rem]"></div>

        <div className={inter.className + " leading-[5rem] text-[50px] font-semibold section-header"}>Picture-Perfect Realness</div>
        <p className={inter.className + " text-[25px] mb-[2rem] ml-[5rem] mr-[5rem] text-center"}>Here we offer a candid and heartwarming glimpse into the true essence of ODPHI, capturing the unscripted moments where we embrace our goofy, unified, and authentic selves, celebrating the genuine bonds that make our fraternity special!</p>
        <Gallery images={goofy}/>

        <p className={inter.className + " text-[25px] mb-[2rem] mt-[5rem] ml-[5rem] mr-[5rem] text-center"}><i>"And that's on Joe Cereceres"</i> - Jose Mendez</p>
        <Footer/>
    </main>
  ) 
}