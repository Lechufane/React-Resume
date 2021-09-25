import React, { useState } from "react";
import Projects from "./Projects.js";
import SocialProfiles from "./SocialProfiles.js";
import Titles from "./Title.js";
import profilePic from "../assets/profile_pic.png";

function App() {
  const [bioState, setStateBio] = useState(false);
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
  );

  return (
    <div>
      <main>
      <img className="profile-pic" src={profilePic} alt="Profile pic" />
      <h1>Hola, soy Diego...</h1>
      <Titles/>
      <p>Este es mi primer portfolio hecho en React con hooks.</p>
      <p>Muchas gracias por pasar!</p>
    
      {bioState ? bio : ""}
      <button onClick={() => setStateBio(displayBio)}>
        {bioState ? "Show less" : "Read more"}
      </button>
      <br/>
      <Projects />
      </main>
      <footer>
        <SocialProfiles />
      </footer>
      
    </div>
  );
}

export default App;
