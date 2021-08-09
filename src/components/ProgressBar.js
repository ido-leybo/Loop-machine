import React from "react";
import Progress from "react-progressbar";
// import ProgressBar2 from "react-bootstrap/ProgressBar";

export default function ProgressBar({ percents }) {
  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
        marginTop: "25px",
        color: "blue",
        border: "1px solid black",
        borderRadius: "2px",
        backgroundColor: "whitesmoke",
      }}
    >
      <Progress completed={percents} />
    </div>
  );
}
