import React, { useEffect, useState } from "react";

export default function Pad({ src }) {
  const [state, setState] = useState(false);
  const [playInLoop, setPlayInLoop] = useState(false);

  const audioTune = new Audio(src);
  useEffect(() => {
    audioTune.load();
  }, []);

  // play audio sound
  const playSound = () => {
    audioTune.play();
    audioTune.loop = true;
  };

  // pause audio sound
  const pauseSound = () => {
    audioTune.pause();
  };

  // stop audio sound
  const stopSound = () => {
    audioTune.pause();
    audioTune.currentTime = 0;
  };
  return (
    <div>
      <button onClick={playSound}>Play</button>
      <button onClick={pauseSound}>Pause</button>
      <button onClick={stopSound}>Stop</button>
      <label>
        <input
          type="checkbox"
          checked={playInLoop}
          onChange={(e) => setPlayInLoop(e.target.checked)}
        />{" "}
        Play in Loop
      </label>
    </div>
  );
}
