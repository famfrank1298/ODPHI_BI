
import Image from "next/image"
import "./Footer.css"

export default function Footer() {

  return (
    <footer className="footer">
      <img src="/odp_logo.png" alt="ODPHI LOGO"/>
    
      <div className="row">
          <a href="https://www.omegadeltaphi.com/" target="_blank" className="border-right"><b>National Website</b></a>
          <a href="https://www.instagram.com/chicagoknights87/" target="_blank"><b>UIC Instagram</b></a>
          <a href="https://www.instagram.com/odphinationals/" target="_blank" className="border-left"><b>National Instagram</b></a>
          <a href="#" className="border-right">Contact <b>Johnny Reyes</b> (Sir Wepa) to Learn More</a>
          <div>Designed By: <b>Frank Mensah</b> (Sir Asante)</div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeoG4RiHZUZMwbh76QMnDU4-SkFAPjF4n_6ko7XLVb6uT9giw/closedform" className="border-left">Interested in Joining: (<b>Sign Up Here</b>)</a>
      </div>


      <div className="text-center w-full copyright">
        © Copyright 2024 Omega Delta Phi Fraternity, Inc - Beta Iota. | All Rights Reserved
      </div>
    </footer>
  )
}