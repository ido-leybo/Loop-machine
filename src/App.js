import "./App.css";
import React, { useState, useEffect } from "react";
import Controller from "./components/Controller";
import Header from "./components/Header";
import Board from "./components/Board";

// import all files
import file1 from "./pads/120_future_funk_beats_25.mp3";
import file2 from "./pads/120_stutter_breakbeats_16.mp3";
import file3 from "./pads/Bass Warwick heavy funk groove on E 120 BPM.mp3";
import file4 from "./pads/electric guitar coutry slide 120bpm - B.mp3";
import file5 from "./pads/FUD_120_StompySlosh.mp3";
import file6 from "./pads/GrooveB_120bpm_Tanggu.mp3";
import file7 from "./pads/MazePolitics_120_Perc.mp3";
import file8 from "./pads/PAS3GROOVE1.03B.mp3";
import file9 from "./pads/SilentStar_120_Em_OrganSynth.mp3";

// import all logos
import FUNK from "./logos/FUNK.png";
import BASS from "./logos/BASS.png";
import ELECTRIC from "./logos/ELECTRIC.png";
import GROOVE from "./logos/GROOVE.png";
import BEAT from "./logos/BEAT.png";
import DRUM from "./logos/DRUM.png";
import ALIEN from "./logos/ALIEN.png";
import SNARE from "./logos/SNARE.png";
import CREEPY from "./logos/CREEPY.png";

function App() {
  const [playing, setPlaying] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [cycleStart, setCycleStart] = useState(true);
  const [pads, setPads] = useState([
    { id: 0, src: file1, name: "funk", logo: FUNK },
    { id: 1, src: file2, name: "breakbeats", logo: BEAT },
    { id: 2, src: file3, name: "bass", logo: BASS },
    {
      id: 3,
      src: file4,
      name: "electric guitar",
      logo: ELECTRIC,
    },
    { id: 4, src: file5, name: "StompySlosh", logo: DRUM },
    { id: 5, src: file6, name: "Groove", logo: GROOVE },
    { id: 6, src: file7, name: "MazePolitics", logo: ALIEN },
    { id: 7, src: file8, name: "PAS3GROOVE", logo: SNARE },
    { id: 8, src: file9, name: "SilentStar", logo: CREEPY },
  ]);

  // Interval of 8 seconds
  useEffect(() => {
    if (playing) {
      const interval = setInterval(() => {
        if (cycleStart) setCycleStart(false);
        if (seconds === 7) {
          setCycleStart(true);
          setSeconds(0);
          return;
        }
        setSeconds((seconds) => seconds + 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    } else {
      setSeconds(0);
    }
  }, [seconds, playing, cycleStart]);

  return (
    <div className="App">
      <Header />
      <Controller setPlaying={setPlaying} playing={playing} />
      <Board
        pads={pads}
        setPads={setPads}
        playing={playing}
        seconds={seconds}
        setSeconds={setSeconds}
        cycleStart={cycleStart}
      />
    </div>
  );
}

export default App;
