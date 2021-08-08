import { useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Header from "./components/Header";
import Board from "./components/Board";

//import all the files
import file1 from "./pads/120_future_funk_beats_25.mp3";
import file2 from "./pads/120_stutter_breakbeats_16.mp3";
import file3 from "./pads/Bass Warwick heavy funk groove on E 120 BPM.mp3";
import file4 from "./pads/electric guitar coutry slide 120bpm - B.mp3";
import file5 from "./pads/FUD_120_StompySlosh.mp3";
import file6 from "./pads/GrooveB_120bpm_Tanggu.mp3";
import file7 from "./pads/MazePolitics_120_Perc.mp3";
import file8 from "./pads/PAS3GROOVE1.03B.mp3";
import file9 from "./pads/SilentStar_120_Em_OrganSynth.mp3";

function App() {
  const [playing, setPlaying] = useState(false);
  const [pads, setPads] = useState([
    { src: file1, name: "funk" },
    { src: file2, name: "breakbeats" },
    { src: file3, name: "bass" },
    { src: file4, name: "electric guitar" },
    { src: file5, name: "StompySlosh" },
    { src: file6, name: "Groove" },
    { src: file7, name: "MazePolitics" },
    { src: file8, name: "PAS3GROOVE" },
    { src: file9, name: "SilentStar" },
  ]);

  return (
    <div className="App">
      <Header />
      <Controller setPlaying={setPlaying} playing={playing} />
      <Board pads={pads} playing={playing} />
    </div>
  );
}

export default App;
