import React, { useState, useEffect } from "react";

function App(){
    const [bioState, setStateBio]= useState(false);

const displayBio = () =>{
      setStateBio(!bioState)
    }


let bio = (
      <div>
        <p>I'm from Mendoza, Argentina.</p>
        <p>
          I code every day, my favorite languaje is JavaScript, and I made this
          single page web portfolio with ReactJS
        </p>
        <p>
          I also enjoy travels, games, videogames, comics, and music. Well, pop
          culture in general!
        </p>
      </div>
    );

useEffect(()=>{
  setStateBio(true)
})
  
    return (
      <div>
        <h1>Hello! My name is Diego.</h1>
        <p>I'm a junior Front-End developer.</p>
        <p>Been learning for 3 years now.</p>
        {bioState? bio : ""}
        <button onClick={()=> setStateBio(displayBio)}>{bioState? "Show less": "Read more"}</button>
      </div>
    );
  }

export default App;
