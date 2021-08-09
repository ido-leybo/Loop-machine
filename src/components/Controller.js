import React, { useState } from "react";
import PlayPause from "./PlayPause";

import { ReactMediaRecorder } from "react-media-recorder";

export default function Controller({ setPlaying, playing }) {
  const [isRecording, setIsRecording] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);

  const startRec = () => {
    // startRecording();
    setIsRecording(true);
  };

  const stopRec = () => {
    // stopRecording();
    setIsRecording(false);
  };

  const toggle = () => {
    setPlaying(!playing);
    setShowPlayButton(!showPlayButton);
  };

  return (
    <div>
      <button
        style={{
          border: "none",
          backgroundColor: "#ff8d8d",
          boxShadow: "0 0 4px 2px rgba(0,0,0,.2)",
          cursor: "pointer",
          height: 40,
          outline: "none",
          borderRadius: "100%",
          width: 40,
          margin: 10,
        }}
        onClick={toggle}
      >
        <PlayPause buttonToShow={showPlayButton ? "play" : "pause"} />{" "}
      </button>
      <button onClick={isRecording ? () => stopRec() : () => startRec()}>
        {isRecording ? "Stop Recording" : "Record"}
      </button>
    </div>
  );
}
