import React from "react";
import Pad from "./Pad";
export default function PadsRow({
  pads,
  playing,
  seconds,
  setSeconds,
  onOffClick,
}) {
  return (
    <div className="PadsRow">
      {pads &&
        pads.map((pad) => {
          return (
            <Pad
              pad={pad}
              playing={playing}
              seconds={seconds}
              setSeconds={setSeconds}
              onOffClick={onOffClick}
              key={pad.id}
            />
          );
        })}
    </div>
  );
}
