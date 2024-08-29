import { useContext } from "react";
import Piece from "../Common/Piece";
import "./GamePro.css";
import rock from "../../images/icon-rock.svg";
import scissors from "../../images/icon-scissors.svg";
import spock from "../../images/icon-spock.svg";
import lizard from "../../images/icon-lizard.svg";
import paper from "../../images/icon-paper.svg";  // Importing paper image here
import { MyContext } from "../Providers/ScoreProvider";

import { useState } from "react";

function GamePro() {
  const { count, setCount, selection, setSelection, computerSelection, setComputerSelection, result } = useContext(MyContext);


  const pieces = [
    { url: rock, color: "#ed143d", piece: 1 },
    { url: scissors, color: "#ffa500", piece: 2 },
    { url: lizard, color: "#cb26cb", piece: 3 },
    { url: spock, color: "#87cefa", piece: 4 },
    { url: paper, color: "#6495ed", piece: 5 }
  ];
 

  function hexToRgb(hex) {
    // Remove the leading # if it's there
    hex = hex.replace(/^#/, '');

    // Parse r, g, b values
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    return `${r}, ${g}, ${b}`;
  }

  return (
    <>
      {selection === 0 && (
        <div className="game-pro">
          {pieces.map(({ url, color, piece }) => (
            <Piece key={piece} url={url} color={color} piece={piece} />
          ))}
        </div>
      )}
      {selection !== 0 && (
        <div className="game-result">

          <div className={`round-corner ${result === 'win' ? 'winner' : ''}`} style={{
            border: `25px solid ${pieces[selection - 1].color}`,
            boxShadow: `0px 8px rgba(${hexToRgb(pieces[selection - 1].color)}, 0.3)`,
          }}>
            <div className="inner-shadow">
              <img src={pieces[selection - 1].url} alt="piece"></img>
            </div>
          </div>

          <div className="mid-sect">
            <p className="veredict">You {result}</p>
            <button className="game-result-button" onClick={() => { setComputerSelection(0); setSelection(0) }}>Play Again</button>
          </div>


          <div className={`round-corner ${result === 'lose' ? 'winner' : ''}`} style={{
            border: `25px solid ${pieces[computerSelection - 1].color}`,
            boxShadow: `0px 9px rgba(${hexToRgb(pieces[computerSelection - 1].color)}, 0.4)`,
          }}>
            <div className="inner-shadow" >
              <img src={pieces[computerSelection - 1].url} alt='piece'></img>
            </div>
          </div>

        </div >
      )
      }
    </>
  );
}

export default GamePro;
