import React from "react";
import Pad from "./Pad";
export default function Board({ pads, playing }) {
  return (
    pads &&
    pads.map((pad) => (
      <Pad src={pad.src} playing={playing} name={pad.name} key={pad.name} />
    ))
  );
}
