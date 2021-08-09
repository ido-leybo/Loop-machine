import React, { useEffect, useRef, useState } from "react";
import ProgressBar from "./ProgressBar";
export default function Pad({ playing, seconds, setSeconds, onOffClick, pad }) {
  const [percents, setPercents] = useState(0);
  const audioTune = useRef();

  // Loading the audio
  useEffect(() => {
    audioTune.current = new Audio(pad.src);
    audioTune.current.load();
  }, [pad.src]);

  // Play and stop the sounds
  useEffect(() => {
    if (playing && pad.state === "ON") {
      playSound();
    } else {
      stopSound();
    }
  }, [playing, pad.state]);

  // Fill the progress bar
  useEffect(() => {
    setPercents(seconds * 14.28);
    if (seconds === 0) {
      audioTune.current.currentTime = 0;
    }
  }, [seconds]);

  // play audio sound
  const playSound = () => {
    audioTune.current.play();
    audioTune.current.loop = true;
  };

  // stop audio sound
  const stopSound = () => {
    audioTune.current.pause();
    audioTune.current.currentTime = 0;
    audioTune.current.onended = function () {
      this.remove();
    };
    setPercents(0);
  };

  return (
    <div className="padDiv">
      <h4>{pad.name}</h4>
      <label>
        <input
          type="checkbox"
          style={{ backgroundColor: "black" }}
          checked={pad.state === "ON"}
          onChange={() => onOffClick(pad.id)}
        />{" "}
        {pad.state}
      </label>
      {pad.state === "ON" && <ProgressBar percents={percents} />}
    </div>
  );
}
