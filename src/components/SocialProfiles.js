import React from "react";
import profiles from "../data/socialProfiles";

const SocialProfiles = () => (   
    <div className="profiles">
        {profiles.map(profile => {
            return (
              <div className="profile" key={profile.id}>
                <a href={profile.link} target="_blank" rel="noreferrer">
                  <img
                    src={profile.image}
                    alt={profile.name}
                  />
                </a>
              </div>
            );
        })}
</div>
)
export default SocialProfiles;