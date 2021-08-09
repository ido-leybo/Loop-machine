import React from "react";
import Pad from "./Pad";
export default function Board({ pads, playing, seconds, setSeconds }) {
  return (
    <div className="boardContainer">
      {pads &&
        pads.map((pad) => (
          <Pad
            src={pad.src}
            playing={playing}
            name={pad.name}
            seconds={seconds}
            setSeconds={setSeconds}
            key={pad.name}
          />
        ))}
    </div>
  );
}
