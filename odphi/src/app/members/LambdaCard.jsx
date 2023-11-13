import "./members.css";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Manrope({ subsets: ["latin"] });

export default function XiCard(props) {
  return (
    <div>
      <div className={inter.className + " leading-[5rem] text-[40px] w-[55rem] font-semibold line-titles ml-[1rem]"}>{props.info[0]["greek-line"]} Line</div>
      <div className={inter.className + " text-[25px] w-[45rem] line-titles text-center"}>{props.info[0]["line-name"]}</div>
      
      <div class="single-line">
        <div class="box">
          <img class="box-image mb-[1rem]" src={props.info[0]["pic-link"]}  alt="Mu Line Brother"/>
          <h3 class="text-center">{props.info[0]["name"]} <br/> <i>{props.info[0]["sir-name"]}</i> #{props.info[0]["number"]}</h3>
          <p class="description text-center"><b>
            Major: {props.info[0]["major"]}<br/>
            {props.info["status"] === "active" ? <p>Position: {props.info[0]["position"]}</p> : null} 
            Status: {props.info[0]["status"].toUpperCase()}
          </b></p>      
        </div>
      </div>
    </div>
  )
}