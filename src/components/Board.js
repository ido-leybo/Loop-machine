import React from "react";
import PadsRow from "./PadsRow";
export default function Board({
  pads,
  playing,
  seconds,
  setSeconds,
  cycleStart,
}) {
  // reduce the main array into 3 arrays
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
              cycleStart={cycleStart}
              playing={playing}
              seconds={seconds}
              setSeconds={setSeconds}
              key={i}
            />
          );
        })}
    </div>
  );
}
