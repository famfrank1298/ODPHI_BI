import Image from "next/image";
import "./members.css";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Manrope({ subsets: ["latin"] });

export default function FoundingCard(props) {
  return (
    <div>
       <div className={inter.className + " leading-[5rem] section-title line-titles"}>Beta Iota {props.info[0]["greek-line"]}</div>
       <div className={inter.className + " line-titles section-name"}>{props.info[0]["line-name"]}</div>
      <div class="single-line">
        <div class="box">
            <img class="box-image mb-[1rem]" src={props.info[0]["pic-link"]}  alt="Mu Line Brother"/>
            <h3 class="text-center">{props.info[0]["name"]} <br/> <i>{props.info[0]["sir-name"]}</i> #{props.info[0]["number"]}</h3>
            <p className={inter.className + " text-[25px] text-center mb-[1rem] mt-[1rem]"}>
              {props.info[0]["name"]} <i>{props.info[0]["sir-name"]}</i> <b>|</b> {"     "}
              {props.info[1]["name"]} <i>{props.info[1]["sir-name"]}</i> <b>|</b> {"     "}
              <br/>
              {props.info[2]["name"]} <i>{props.info[2]["sir-name"]}</i> <b>|</b> {"     "}
              {props.info[3]["name"]} <i>{props.info[3]["sir-name"]}</i> <b>|</b> {"     "}
              <br/>
              {props.info[4]["name"]} <i>{props.info[4]["sir-name"]}</i> <b>|</b> {"     "}
              {props.info[5]["name"]} <i>{props.info[5]["sir-name"]}</i> <b>|</b> {"     "}
              {props.info[6]["name"]} <i>{props.info[6]["sir-name"]}</i> <b>|</b> {"     "}
            </p>   
          </div>
        </div>
    </div>

  )
}