
import { useContext } from "react";
import { MyContext } from "../../Context/ScoreProvider";
import { hexToRgb, game_result } from '../Common/utiles';
import "./Piece.css";
function Piece(props) {
  const { setSelection, setResult, setCount, setOpponentSelection, playComputer, socket, matchReady, room, navigate, setPlayComputer } = useContext(MyContext);


  function manageSelection() {

    if (playComputer === true) {
      setSelection(props.piece);

      // Delay the computer's decision
      setTimeout(() => {
        const rand = Math.floor(Math.random() * 5) + 1; // Computer's choice
        setOpponentSelection(rand);

        let outcome;

        // Check for tie
        if (rand === props.piece) {
          outcome = "tie";
        } else {
          // Determine if player wins or loses using the matrix
          const isWin = game_result[props.piece - 1][rand - 1];
          outcome = isWin ? "win" : "lose";

          // Update the count
          setCount(prev => Math.max(0, prev + (isWin ? 1 : -1)));
        }

        // Set the result after the decision is made
        setResult(outcome);

      }, 1000); // 1 second delay
    }
    else if (matchReady === true) {
      setSelection(props.piece)
      socket.emit('selection', { roomId: room, piece: props.piece }, (err) => {
        if (err) {
          console.error(err)
          setPlayComputer(true)
          navigate('/')
        }
      });

    }
    else {
      setSelection(0)
    }

  }

  return (

    <div
      className="piece"
      style={{
        borderColor: `${props.color}`,
        boxShadow: `inset 0 8px rgba(0, 0, 0, 0.3), -1px 8px rgba(${hexToRgb(props.color)}, 0.3)`,
      }}

      onClick={() => {
        manageSelection()
      }
      }
    >
      <img src={props.url} alt="Piece"></img>
    </div>
  );
}

export default Piece;
