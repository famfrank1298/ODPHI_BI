import "./members.css";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Manrope({ subsets: ["latin"] });

export default function CharterCard(props) {
  return (
    // <div>
    //   <div className={inter.className + " leading-[5rem] text-[40px] w-[55rem] font-semibold line-titles ml-[1rem]"}>Beta Iota {props.info[0]["greek-line"]}</div>
    //   <div className={inter.className + " text-[25px] w-[45rem] line-titles text-center"}>{props.info[0]["line-name"]}</div>
    //   <p className={inter.className + " text-[25px] text-center mb-[1rem] mt-[1rem]"}>
    //     {props.info[0]["name"]} <i>{props.info[0]["sir-name"]}</i> <b>|</b> {"     "}
    //     <br/>
    //     {props.info[1]["name"]} <i>{props.info[1]["sir-name"]}</i> <b>|</b> {"     "}
    //   </p>
    //   <div class="image-founding-charter">
    //       <img src={props.info[0]["pic-link"]} alt="Charter Line Picture"/>
    //   </div>
    // </div>

  <div>
    <div className={inter.className + " leading-[5rem] text-[40px] w-[55rem] font-semibold line-titles ml-[1rem]"}>Beta Iota {props.info[0]["greek-line"]}</div>
    <div className={inter.className + " text-[25px] w-[45rem] line-titles text-center"}>{props.info[0]["line-name"]}</div>
    <div class="single-line">
    <div class="box">
        <img class="box-image mb-[1rem]" src={props.info[0]["pic-link"]}  alt="Charter Line Brother"/>
        <h3 class="text-center">{props.info[0]["name"]} <br/> <i>{props.info[0]["sir-name"]}</i> #{props.info[0]["number"]}</h3>
        <p className={inter.className + " text-[25px] text-center mb-[1rem] mt-[1rem]"}>
            {props.info[0]["name"]} <i>{props.info[0]["sir-name"]}</i> <b>|</b> {"     "}
            <br/>
            {props.info[1]["name"]} <i>{props.info[1]["sir-name"]}</i> <b>|</b> {"     "}
          </p> 
      </div>
    </div>
  </div>
  )
}