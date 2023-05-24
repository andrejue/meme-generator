import React from "react";
import Logo from "../assets/troll_face.png"
import "./header.css"

export default function Header() {
   return (
      <header className="header">
         <div className="logo">
            <img src={Logo} alt="Trofanse_logo" className="header--logo"/>
            <h1>Meme Generator</h1>
         </div>
         <div className="header--sub">
            <h2>React Course - Project 3</h2>
         </div>
      </header>
   )
}
