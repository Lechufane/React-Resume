import React from "react";
import Projects from "./Projects.js";
import SocialProfiles from "./SocialProfiles.js";
import Bio from "./Bio.js"


function App() {


  return (
    <div>
      <header>
        <Bio/> 
      </header>

      <main>
      <Projects />
      
      </main>

      <footer>
        <SocialProfiles />
      </footer>
      


    </div>
  );
}

export default App;
