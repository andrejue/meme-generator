import React, { useState, createRef } from "react";

import Memes from "./Data.js"
import Meme from "./Meme.js"
import downloadjs from 'downloadjs';
import html2canvas from "html2canvas";
import './main.css'

export default function Main() {

   //const [memeImg, setMemeImg] = useState("https://i.imgflip.com/hlmst.jpg")
   const [meme, setMeme] = useState({
      ...Memes,
      topText: "",
      bottomText: "",
      randomImage: ""
   })

   const [allMemeImages, setAllMemeImages] = useState(Memes)

   function getMemeImage() {
      const memesArray = allMemeImages.data.memes;
      const randomNumber = Math.floor(Math.random() * memesArray.length);
      const url = memesArray[randomNumber].url
      setMeme(prevMeme => ({
         ...prevMeme,
         randomImage: url
      }));

   }

   function handleChange(event) {
      const {name, value} = event.target
      setMeme(prevMemeData => {
         return {
            ...prevMemeData,
            [name]: value
         }
      })
   }

   return (
      <main>
         <div className="form">
            <div className="inputs">
               <input className="upper-phrase" type="text" placeholder="Top text" name="topText" onChange={handleChange}/>
               <input className="below-phrase" type="text" placeholder="Bottom text" name="bottomText" onChange={handleChange}/>
            </div>
            <button className="btn" onClick={getMemeImage} >Get a new meme image  🖼</button>

            <Meme src={meme.randomImage} topText={meme.topText} bottomText={meme.bottomText} />



         </div>
      </main>
   )
}
