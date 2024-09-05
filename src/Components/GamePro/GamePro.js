import { useContext } from "react";
import Piece from "../Common/Piece";
import Match from "../Match/Match";
import "./GamePro.css";
import rock from "../../images/icon-rock.svg";
import scissors from "../../images/icon-scissors.svg";
import spock from "../../images/icon-spock.svg";
import lizard from "../../images/icon-lizard.svg";
import paper from "../../images/icon-paper.svg";  // Importing paper image here
import { MyContext } from "../Providers/ScoreProvider";


function GamePro() {
  const { selection } = useContext(MyContext);


  const pieces = [
    { url: rock, color: "#ed143d", piece: 1 },
    { url: scissors, color: "#ffa500", piece: 2 },
    { url: lizard, color: "#cb26cb", piece: 3 },
    { url: spock, color: "#87cefa", piece: 4 },
    { url: paper, color: "#6495ed", piece: 5 }
  ];

  return (
    <>
      {selection === 0 && (
        <div className="game-pro">
          {pieces.map(({ url, color, piece }) => (
            <Piece key={piece} url={url} color={color} piece={piece} />
          ))}
        </div>
      )}
      {selection !== 0 && (<Match />)}
    </>
  );
}

export default GamePro;
