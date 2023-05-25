import React, { createRef, useState } from "react";
import { exportComponentAsJPEG } from 'react-component-export-image';

export default function Meme(props) {

   const [componentRef, setComponentRef] = useState(createRef());

   return (
      <>
         <div className="meme" id="meme" ref={componentRef} >
            <img src={props.src} alt="Click to generate a random meme" className="meme-img"/>
            <h2 className="meme--text top">{props.topText}</h2>
            <h2 className="meme--text bottom">{props.bottomText}</h2>
         </div>
         <button className="download-btn" onClick={() => exportComponentAsJPEG(componentRef)}>Download your meme</button>
      </>
   )
}
