import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({displaySushis, eatSushi, getSushi}) {


  return (
    <div className="belt">
      {displaySushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} eatSushi={eatSushi}/>)}
      <MoreButton getSushi={getSushi} />
    </div>
  );
}

export default SushiContainer;
