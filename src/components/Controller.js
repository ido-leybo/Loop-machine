import React from "react";

export default function Controller({ setIsPlay }) {
  return (
    <div>
      <button onClick={setIsPlay(true)}>play</button>
      <button onClick={setIsPlay(false)}>stop</button>
    </div>
  );
}
