import React, { useEffect, useRef, useState } from "react";

export default function Pad({ src, playing, name }) {
  const [isOn, setIsOn] = useState(false);

  const audioTune = useRef(new Audio(src));

  useEffect(() => {
    audioTune.current.load();
  }, []);

  useEffect(() => {
    if (playing && isOn) {
      playSound();
    } else {
      stopSound();
    }
  }, [playing, isOn]);

  // play audio sound
  const playSound = () => {
    audioTune.current.play();
    audioTune.current.loop = true;
  };

  // stop audio sound
  const stopSound = () => {
    audioTune.current.pause();
    audioTune.current.currentTime = 0;
  };

  // pause audio sound
  //   const pauseSound = () => {
  //     audioTune.pause();
  //   };

  return (
    <div>
      <h4>{name}</h4>
      <label>
        <input
          type="checkbox"
          checked={isOn}
          onChange={(e) => setIsOn(e.target.checked)}
        />{" "}
        {isOn ? "off" : "on"}
      </label>
    </div>
  );
}
