import "./ScoreBar.css";
import React, { useContext } from "react";
import logo from "../../images/logo-bonus.svg";
import { MyContext } from "../Providers/ScoreProvider";

function ScoreBar() {
  const { count, setCount } = useContext(MyContext);

  return (
    <div className="score-bar">
      <img src={logo} className="Logo" alt="logo" />
      <div className="score-section">
        <h2 onClick={()=> setCount(count+1)}>Score</h2>
        <div className="score">{count}</div>
      </div>
    </div>
  );
}

export default ScoreBar;
