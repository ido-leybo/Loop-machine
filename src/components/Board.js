import React from "react";
import Pad from "./Pad";
import PadsRow from "./PadsRow";
export default function Board({ pads, playing, seconds, setSeconds, setPads }) {
  const onOffClick = (id) => {
    const newPad = pads.find((currentPad) => currentPad.id === id);
    if (newPad.state !== "OFF") newPad.state = "OFF";
    else newPad.state = "PENDING";

    const newState = pads.map((pad) => (pad.id === id ? { ...newPad } : pad));
    setPads(newState);
  };

  const twoDPads = pads.reduce(
    (rows, key, index) =>
      (index % 3 === 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows,
    []
  );

  return (
    <div className="boardContainer">
      {twoDPads &&
        twoDPads.map((pads, i) => {
          return (
            <PadsRow
              pads={pads}
              playing={playing}
              seconds={seconds}
              setSeconds={setSeconds}
              onOffClick={onOffClick}
              key={i}
            />
          );
        })}
    </div>
  );
}
