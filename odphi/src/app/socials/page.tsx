import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Manrope({ subsets: ["latin"] });
import Header from "../Header";
import Gallery from "../gallery/Gallery";
import Footer from "../Footer";

export default function Home() {

  const socials: string[] = [
    "socialGallery/social1.jpg",
    "socialGallery/social2.jpg",
    "socialGallery/social3.jpg",
    "socialGallery/social4.jpg",
    "socialGallery/social5.jpg",
    "socialGallery/social6.jpg",
    "socialGallery/social7.jpg",
    "socialGallery/social8.JPG",
    "socialGallery/social9.JPG",
    "socialGallery/social10.jpg",
    "socialGallery/social11.jpg",
    "socialGallery/social12.jpg",
    "socialGallery/social13.jpg",
    "socialGallery/social14.JPG",
    "socialGallery/social15.JPG",
    "socialGallery/social16.JPG",
    "socialGallery/social17.jpg",
    "socialGallery/social18.jpg",
    "socialGallery/social19.jpg",
    "socialGallery/social20.JPG"
  ]

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header/>

      <div className={inter.className + " leading-[5rem] text-[50px] font-semibold section-header"}>Social</div>
      <p className={inter.className + " ss-body"}>At ODPHI, social engagement fosters an environment where bonds of brotherhood are not only strengthened but also extended to various spheres of influence. 
      Whether we are collaborating with other student organizations at UIC to host cultural events, partnering with external organizations for community service initiatives, or connecting with brothers from different chapters, these moments of social interaction are pivotal.
      <br></br><br></br>Through social engagement, we collectively build leadership skills, empowering each other to navigate social dynamics and diverse settings, ultimately strengthening the bond of brotherhood within ourselves and extending it to our broader community and beyond.</p>
      <Gallery images={socials}/>
      <Footer/>
    </main>
  )
}