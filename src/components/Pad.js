import React, { useEffect, useRef, useState } from "react";
import ProgressBar from "./ProgressBar";
export default function Pad({ playing, seconds, pad, cycleStart }) {
  const [percents, setPercents] = useState(0);
  const [className, setClassName] = useState("padDiv-off");
  const audioTune = useRef();
  const stateRef = useRef("OFF");

  // Loading the audio
  useEffect(() => {
    audioTune.current = new Audio(pad.src);
    audioTune.current.load();
  }, [pad.src]);

  // Play and stop the sounds
  useEffect(() => {
    if (playing && stateRef.current.textContent === "ON" && cycleStart) {
      playSound();
    } else if (!playing || stateRef.current.textContent === "OFF") {
      stopSound();
    } else {
      playSound();
    }
  }, [playing, cycleStart]);

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
    setClassName("padDiv-on");
  };

  // stop audio sound
  const stopSound = () => {
    audioTune.current.pause();
    audioTune.current.currentTime = 0;
    audioTune.current.onended = function () {
      this.remove();
    };
    setPercents(0);
    stateRef.current.textContent = "OFF";
    setClassName("padDiv-off");
  };

  // check the state of the pad
  const checkRef = () => {
    if (stateRef.current.textContent === "OFF") {
      stateRef.current.textContent = "ON";
    } else {
      stateRef.current.textContent = "OFF";
      stopSound();
      setClassName("padDiv-off");
    }
  };

  return (
    <div className={className} onClick={() => checkRef()}>
      <h3>
        <img src={pad.logo} width={40} height={40} alt={pad.name} />
      </h3>
      <h3 className="onOffText" ref={stateRef}>
        OFF
      </h3>
      {stateRef.current.textContent === "ON" && (
        <ProgressBar percents={percents} />
      )}
    </div>
  );
}
