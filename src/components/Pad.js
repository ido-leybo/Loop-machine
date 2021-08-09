import React, { useEffect, useRef, useState } from "react";
import ProgressBar from "./ProgressBar";
export default function Pad({ src, playing, name, seconds, setSeconds }) {
  const [isOn, setIsOn] = useState(false);
  const [percents, setPercents] = useState(0);
  const audioTune = useRef(new Audio(src));

  // Loading the audio
  useEffect(() => {
    audioTune.current.load();
  }, []);

  // Play and stop the sounds
  useEffect(() => {
    if (playing && isOn) {
      playSound();
    } else {
      stopSound();
    }
  }, [playing, isOn]);

  // Fill the progress bar
  useEffect(() => {
    setPercents(seconds * 14.28);
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
    setPercents(0);
  };

  return (
    <div className="padDiv">
      <h4>{name}</h4>
      <label>
        <input
          type="checkbox"
          checked={isOn}
          onChange={(e) => setIsOn(e.target.checked)}
        />{" "}
        {isOn ? "off" : "on"}
      </label>
      {isOn && <ProgressBar percents={percents} />}
    </div>
  );
}
