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
      <div className="single-line">
        <div className="box foundingText">
            <img className="box-image mb-[1rem]" src={props.info[0]["pic-link"]}  alt="Founding Line Brothers"/>
            {/* <h3 className="text-center">{props.info[0]["name"]} <br/> <i>{props.info[0]["sir-name"]}</i> #{props.info[0]["number"]}</h3> */}
            <p className={inter.className + " text-[25px] text-center mb-[1rem] mt-[1rem]"}>
              {props.info[0]["name"]} - <b><i>{props.info[0]["sir-name"]}</i></b> -
              <br/>
              {props.info[1]["name"]} - <b><i>{props.info[1]["sir-name"]}</i></b> -
              <br/>
              {props.info[2]["name"]} - <b><i>{props.info[2]["sir-name"]}</i></b> -
              <br/>
              {props.info[3]["name"]} - <b><i>{props.info[3]["sir-name"]}</i></b> -
              <br/>
              {props.info[4]["name"]} - <b><i>{props.info[4]["sir-name"]}</i></b> -
              <br/>
              {props.info[5]["name"]} - <b><i>{props.info[5]["sir-name"]}</i></b> -
              <br/>
              {props.info[6]["name"]} - <b><i>{props.info[6]["sir-name"]}</i></b> -
            </p>   
          </div>
        </div>
    </div>

  )
}