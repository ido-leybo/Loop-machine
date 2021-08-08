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
  console.log(file1);
  const [isPlay, setIsPlay] = useState(false);
  const [pads, setPads] = useState([
    file1,
    file2,
    file3,
    file4,
    file5,
    file6,
    file7,
    file8,
    file9,
  ]);
  return (
    <div className="App">
      <Header />
      <Controller setIsPlay={setIsPlay} />
      <Board pads={pads} isPlay={isPlay} />
    </div>
  );
}

export default App;
