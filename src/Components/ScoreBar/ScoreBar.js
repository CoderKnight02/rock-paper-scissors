import "./ScoreBar.css";
import React, { useContext } from "react";
import logo from "../../images/logo-bonus.svg";
import { MyContext } from "../../Context/ScoreProvider";

function ScoreBar() {
  const { count } = useContext(MyContext);

  return (
    <div className="score-bar">
      <img src={logo} className="Logo" alt="logo" />
      <div className="score-section">
        <h2>Score</h2>
        <div className="score">{count}</div>
      </div>
    </div>
  );
}

export default ScoreBar;
