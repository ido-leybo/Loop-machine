import React, { useCallback, useEffect, useRef, useState } from "react";
import ProgressBar from "./ProgressBar";
export default function Pad({ playing, seconds, onOffClick, pad }) {
  const [percents, setPercents] = useState(0);
  const audioTune = useRef();
  const [className, setClassName] = useState("padDiv-off");

  // check the state of the pad
  const checkStateAndSetClass = useCallback(() => {
    if (pad.state === "PENDING") setClassName("padDiv-pending");
    else if (pad.state === "OFF") setClassName("padDiv-off");
    else {
      onOffClick(pad.id);
      setClassName("padDiv-on");
    }
  }, [onOffClick, pad.state, pad.id]);

  // Loading the audio
  useEffect(() => {
    audioTune.current = new Audio(pad.src);
    audioTune.current.load();
  }, [pad.src]);

  // Play and stop the sounds
  useEffect(() => {
    if (playing && pad.state === "ON") {
      playSound();
      setClassName("padDiv-on");
    } else {
      stopSound();
      checkStateAndSetClass();
    }
  }, [playing, pad.state, checkStateAndSetClass]);

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
    <div
      className={className}
      onClick={() => {
        onOffClick(pad.id);
        checkStateAndSetClass();
      }}
    >
      <h3>
        <img src={pad.logo} width={40} height={40} alt={pad.name} />
      </h3>
      <h3 className="onOffText">{pad.state}</h3>
      {pad.state === "ON" && <ProgressBar percents={percents} />}
    </div>
  );
}
