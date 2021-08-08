import React from "react";
import Pad from "./Pad";
export default function Board({ pads }) {
  return pads && pads.map((file) => <Pad src={file} key={file} />);
}
