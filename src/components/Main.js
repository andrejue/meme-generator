import React, { useState, useEffect } from "react";
//import Memes from "./Data.js"
import Meme from "./Meme.js"
import './main.css'

export default function Main() {

   //const [memeImg, setMemeImg] = useState("https://i.imgflip.com/hlmst.jpg")

   const [allMemeImages, setAllMemeImages] = useState([])

   useEffect(() => {
      fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemeImages(data.data.memes))
   }, [])

      // useEffect(() => {
      //    async function getData() {
      //       const res = await fetch("https://api.imgflip.com/get_memes")
      //       const data = await res.json()
      //       setAllMemeImages(data.data.memes)
      //    }
      // }, [])

      const [meme, setMeme] = useState({
         topText: "",
         bottomText: "",
         randomImage: ""
      })

   function getMemeImage() {
      const randomNumber = Math.floor(Math.random() * allMemeImages.length);
      const url = allMemeImages[randomNumber].url
      setMeme(prevMeme => ({
         ...prevMeme,
         randomImage: url
      }));
      console.log("run")
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
            <button className="btn" onClick={getMemeImage} >Get a new meme image 😁</button>

            <Meme src={meme.randomImage} topText={meme.topText} bottomText={meme.bottomText} />



         </div>
      </main>
   )
}
