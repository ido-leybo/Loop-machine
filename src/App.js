import { useState, useEffect, useCallback } from "react";
import "./App.css";
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
  const [pads, setPads] = useState([
    { id: 0, src: file1, name: "funk", state: "OFF", logo: FUNK },
    { id: 1, src: file2, name: "breakbeats", state: "OFF", logo: BEAT },
    { id: 2, src: file3, name: "bass", state: "OFF", logo: BASS },
    {
      id: 3,
      src: file4,
      name: "electric guitar",
      state: "OFF",
      logo: ELECTRIC,
    },
    { id: 4, src: file5, name: "StompySlosh", state: "OFF", logo: DRUM },
    { id: 5, src: file6, name: "Groove", state: "OFF", logo: GROOVE },
    { id: 6, src: file7, name: "MazePolitics", state: "OFF", logo: ALIEN },
    { id: 7, src: file8, name: "PAS3GROOVE", state: "OFF", logo: SNARE },
    { id: 8, src: file9, name: "SilentStar", state: "OFF", logo: CREEPY },
  ]);

  const setPendingOn = useCallback(() => {
    const newState = pads.map((pad) => {
      if (pad.state === "PENDING") pad.state = "ON";
      return pad;
    });
    setPads(newState);
  }, [pads]);

  // Interval of 8 seconds
  useEffect(() => {
    if (playing) {
      const interval = setInterval(() => {
        if (seconds === 7) {
          setSeconds(0);
          return;
        }
        if (seconds === 0) setPendingOn();
        setSeconds((seconds) => seconds + 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    } else {
      setSeconds(0);
    }
  }, [seconds, playing, setPendingOn]);

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
      />
    </div>
  );
}

export default App;
