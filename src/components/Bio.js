import React, {useState} from "react";
import profilePic from "../assets/profile_pic.png";
import backImage from "../assets/back1.jpg"
import Titles from "./Title";
import Quotes from "./Quotes"

function Bio() {
  const [bioState, setStateBio] = useState(true);
  const displayBio = () => {
    setStateBio(!bioState);
  };
  const bio = (
    <div>
      <br />
      <p>Me llamo Diego Villafañe y soy de Mendoza, Argentina.</p>
      <p>Me gusta la cultura pop, viajar y jugar juegos de mesa.</p>
      <p>Llevo 3 años estudiando y escribiendo codigo cada día.</p>
    </div>
  )

//   

  return (
    <div className="banner">

    <img className="banner-image" src={backImage}/> 

      <div className="bio">
      <img className="profile-pic" src={profilePic} alt="Profile pic" />
      <h1>Hola, soy Diego...</h1>
      <Titles/>
      <p>Este es mi primer portfolio hecho en React con hooks.</p>
      <p>Muchas gracias por pasar!</p>    
      {bioState ? bio : ""}
      <button className="bio-button" onClick={() => setStateBio(displayBio)}>
        {bioState ? "Show less" : "Read more"}
      </button>
      </div>
      <div>
        <Quotes/>
      </div>
      
    </div>
    )
}

export default Bio;

