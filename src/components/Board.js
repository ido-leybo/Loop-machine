import React from "react";
import Pad from "./Pad";
export default function Board({ pads, playing, seconds, setSeconds, setPads }) {
  const onOffClick = (id) => {
    const newPad = pads.find((currentPad) => currentPad.id === id);
    if (newPad.state !== "OFF") newPad.state = "OFF";
    else newPad.state = "PENDING";

    const newState = pads.map((pad) => (pad.id === id ? { ...newPad } : pad));
    setPads(newState);
  };

  return (
    <div className="boardContainer">
      {pads &&
        pads.map((pad) => (
          <Pad
            pad={pad}
            playing={playing}
            seconds={seconds}
            setSeconds={setSeconds}
            onOffClick={onOffClick}
            key={pad.id}
          />
        ))}
    </div>
  );
}
