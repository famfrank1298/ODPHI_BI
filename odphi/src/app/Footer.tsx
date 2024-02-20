
import Image from "next/image"
import "./Footer.css"

export default function Footer() {

  return (
    <footer className="footer">
      <img src="/odp_logo.png" alt="ODPHI LOGO"/>
    
      <div className="row">
          <a href="https://www.omegadeltaphi.com/" target="_blank"><b>National Website</b>: www.omegadeltaphi.com</a>
          <a href="https://www.instagram.com/chicagoknights87/" target="_blank"><b>UIC Instagram</b>: instagram.com/chicagoknights87/</a>
          <a href="https://www.instagram.com/odphinationals/" target="_blank"><b>National Instagram</b>: www.instagram.com/odphinationals/</a>
          <a href="#">Contact <b>Johnny Reyes</b> (jreye28@uic.edu) to Learn More</a>
          <div>Designed By: <b>Frank Mensah</b> (Sir Asante: fmensa2@uic.edu)</div>
      </div>


      <div className="text-center w-full copyright">
        © Copyright 2024 Omega Delta Phi Fraternity, Inc - Beta Iota. | All Rights Reserved
      </div>
    </footer>
  )
}