
import { useContext } from "react";
import { MyContext } from "../../Context/ScoreProvider";
import { hexToRgb, game_result } from '../Common/utiles';
import "./Piece.css";
function Piece(props) {
  const { setSelection, setResult, setCount, setOpponentSelection, playComputer, socket, matchReady, room, navigate } = useContext(MyContext);


  function manageSelection() {

    if (playComputer === true) {

      // Introduce a delay for the computer's decision
      setTimeout(() => {
        let outcome;
        const rand = Math.floor(Math.random() * 5) + 1;
        setOpponentSelection(rand);

        // Determine the result after the delay
        if (rand === props.piece) {
          outcome = "tie";
        } else {
          const isWin = game_result[props.piece - 1][rand - 1];
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
    else if (matchReady === true) {
      setSelection(props.piece)
      console.log('we are getting here')
      socket.emit('selection', { roomId: room, piece: props.piece }, (err) => {
        if (err) {
          console.error(err) 
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
        console.log(matchReady)
        manageSelection()
      }
      }
    >
      <img src={props.url} alt="Piece"></img>
    </div>
  );
}

export default Piece;
