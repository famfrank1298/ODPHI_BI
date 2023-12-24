
import Image from "next/image"
import "./Footer.css"

export default function Footer() {

  return (
    <footer className="footer">
      <img src="/odp_logo.png" alt="ODPHI LOGO"/>
    
      <div className="row">
          <a href="#"><b>National Website</b>: www.omegadeltaphi.com</a>
          <a href="#"><b>UIC Instagram</b>: instagram.com/chicagoknights87/</a>
          <a href="#"><b>National Instagram</b>: www.instagram.com/odphinationals/</a>
          <a href="#">Contact <b>Johnny Reyes</b> (773-971-1170) to Learn More</a>
          <div>Designed By: <b>Frank Mensah</b> (Sir Asante: 773-875-4389)</div>
      </div>


      <div className="text-center w-full copyright">
        © Copyright 2023 Omega Delta Phi Fraternity, Inc. | All Rights Reserved
      </div>
    </footer>
  )
}