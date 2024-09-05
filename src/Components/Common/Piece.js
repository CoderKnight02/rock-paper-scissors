
import { useContext } from "react";
import { MyContext } from "../Providers/ScoreProvider";
import { hexToRgb } from '../Common/utiles';
import "./Piece.css";
function Piece(props) {
  const { setSelection, setResult, setCount, playFriend, setOpponentSelection } = useContext(MyContext);

  const ans = [
    //rock scissors lizard spock paper
    [false, true, true, false, false], // Rock
    [false, false, true, false, true], // Scissors
    [false, false, false, true, true], // Lizard
    [true, true, false, false, false], // Spock
    [true, false, false, true, false] // Paper
  ];

  function ComputerSelection() {
    // Introduce a delay for the computer's decision
    setTimeout(() => {
      let outcome;
      const rand = Math.floor(Math.random() * 5) + 1;
      setOpponentSelection(rand);

      // Determine the result after the delay
      if (rand === props.piece) {
        outcome = "tie";
      } else {
        const isWin = ans[props.piece - 1][rand - 1];
        outcome = isWin ? "win" : "lose";

        // Update count based on the result
        setCount(prev => {
          const newCount = prev + (isWin ? 1 : -1);
          return newCount >= 0 ? newCount : 0;
        });
      }

      // Update the result
      setResult(outcome);

    }, 1000);
  }

  function FriendSelection() {
    // Introduce a delay for the computer's decision
    setTimeout(() => {
      let outcome;
      const rand = Math.floor(Math.random() * 5) + 1;
      setOpponentSelection(rand);

      // Determine the result after the delay
      if (rand === props.piece) {
        outcome = "tie";
      } else {
        const isWin = ans[props.piece - 1][rand - 1];
        outcome = isWin ? "win" : "lose";

        // Update count based on the result
        setCount(prev => {
          const newCount = prev + (isWin ? 1 : -1);
          return newCount >= 0 ? newCount : 0;
        });
      }

      // Update the result
      setResult(outcome);

    }, 1000);
  }

  return (

    <div
      className="piece"
      style={{
        borderColor: `${props.color}`,
        boxShadow: `inset 0 8px rgba(0, 0, 0, 0.3), -1px 8px rgba(${hexToRgb(props.color)}, 0.3)`,
      }}

      onClick={() => {
        setSelection(props.piece);

        if (playFriend === false)
          ComputerSelection()

        if (playFriend === true)
          FriendSelection()

      }
      }
    >
      <img src={props.url} alt="Piece"></img>
    </div>
  );
}

export default Piece;
