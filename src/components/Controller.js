import React, { useState } from "react";
import PlayPause from "./PlayPause";

import { ReactMediaRecorder } from "react-media-recorder";

export default function Controller({ setPlaying, playing }) {
  const [isRecording, setIsRecording] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const [record, setRecord] = useState(false);

  const startRec = () => {
    startRecording();
    setIsRecording(true);
    setRecord(true);
  };

  const stopRec = () => {
    setIsRecording(false);
    setRecord(false);
  };

  const startRecording = () => {
    return (
      <ReactMediaRecorder
        audio
        render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
          <div>
            <p>{status}</p>
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop Recording</button>
            <audio src={mediaBlobUrl} controls />
          </div>
        )}
      />
    );
  };

  // toggle between 'play' & 'pause' buttons
  const toggle = () => {
    setPlaying(!playing);
    setShowPlayButton(!showPlayButton);
  };

  return (
    <div>
      <button
        style={{
          border: "none",
          backgroundColor: "rgb(58, 58, 187)",
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
      <button
        className="mainRecordButton"
        onClick={isRecording ? () => stopRec() : () => startRec()}
      >
        {isRecording ? "Stop ↩" : "Record ⬇"}
      </button>
      {record && (
        <ReactMediaRecorder
          audio
          render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
            <div>
              <p className="isRecording">{status}</p>
              <div className="recordControlButtons">
                <button className="startRecButton" onClick={startRecording}>
                  Start⏯
                </button>
                <button className="stopRecButton" onClick={stopRecording}>
                  Stop⏸
                </button>
              </div>
              <audio className="audioPlayer" src={mediaBlobUrl} controls />
            </div>
          )}
        />
      )}
    </div>
  );
}
