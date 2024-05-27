import React, { useState } from "react";
import Planeteer from "./Planeteer";


// Holds the randomly selected planeteer
function RandomButton({ planeteers }) {
  const [randomPlaneteer, setRandomPlaneteer] = useState(null);

// Function to select random planetter
  function handleClick(){
    const randomPlaneteer=planeteers[Math.floor(Math.random() * planeteers.length)];
    setRandomPlaneteer(randomPlaneteer);
  }

  return (
    <div className="centered">
      <button onClick={handleClick} id="random-planeteer">Click to Show a Random Planeteer</button>
    </div>
  );
}

export default RandomButton;
