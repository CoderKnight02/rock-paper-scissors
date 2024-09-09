import { useContext } from "react";
import Piece from "../../Components/Common/Piece.js";
import Match from "../../Components/Match/Match.js";
import "./Computer.css";
import { MyContext } from "../../Context/ScoreProvider.js";
import ScoreBar from "../../Components/ScoreBar/ScoreBar.js";
import Footer from "../../Components/Footer/Footer.js";
import { pieces } from "../../Components/Common/utiles.js"

function Computer() {
  const { selection } = useContext(MyContext);

  return (
    <>
      <ScoreBar />

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

export default Computer;
