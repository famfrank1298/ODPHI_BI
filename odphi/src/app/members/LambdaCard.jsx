import Image from "next/image";
import "./members.css";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Manrope({ subsets: ["latin"] });

export default function XiCard(props) {
  return (
    <div>
      <div className={inter.className + " leading-[5rem] section-title line-titles"}>{props.info[0]["greek-line"]} Line</div>
      <div className={inter.className + " line-titles section-name"}>{props.info[0]["line-name"]}</div>
      
      <div className="single-line">
        {props.info.map(function (bro, i) {
          return <div className="box" key={i}>
            <img className="box-image mb-[1rem]" src={props.info[i]["pic-link"]}  alt="Mu Line Brother"/>
            <h3 className="text-center">{props.info[i]["name"]} <br/> <i>{props.info[i]["sir-name"]}</i> #{props.info[i]["number"]}</h3>
            <p className="description text-center"><b>
              Major: {props.info[i]["major"]}<br/>
              {props.info[i]["status"] === "active" ? <p>Position: {props.info[i]["position"]}</p> : null} 
              Status: {props.info[i]["status"].toUpperCase()}
            </b></p>      
          </div>
        })}
      </div>
    </div>
  )
}