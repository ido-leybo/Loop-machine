import React from "react";

export default function Controller({ setPlaying, playing }) {
  const toggle = () => setPlaying(!playing);
  return (
    <div>
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
}
