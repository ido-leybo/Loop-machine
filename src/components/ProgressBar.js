import React from "react";
import Progress from "react-progressbar";

export default function ProgressBar({ percents }) {
  return (
    <div className="progressBar">
      <Progress color="darkgreen" completed={percents} />
    </div>
  );
}
