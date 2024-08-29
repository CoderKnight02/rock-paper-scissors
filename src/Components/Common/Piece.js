
import { useContext } from "react";
import { MyContext } from "../Providers/ScoreProvider";
import { hexToRgb } from '../Common/utiles';
import "./Piece.css";
function Piece(props) {
  const { setSelection, setComputerSelection, setResult, setCount } = useContext(MyContext);

  const ans = Array(55).fill(false);

  ans[12] = 1; ans[13] = 1; ans[51] = 1; ans[41] = 1;
  ans[23] = 1; ans[25] = 1; ans[42] = 1;
  ans[35] = 1; ans[43] = 1;
  ans[54] = 1;

  return (
    <div
      className="piece"
      style={{
        borderColor: `${props.color}`,
        boxShadow: `inset 0 8px rgba(0, 0, 0, 0.3), -1px 8px rgba(${hexToRgb(props.color)}, 0.3)`,
      }}
      onClick={() => {
        var rand = Math.floor(Math.random() * 5) + 1
        setSelection(props.piece)
        setComputerSelection(rand)
        if (rand == props.piece) {
          setResult("tie")
        } else {
          setResult(ans[props.piece * 10 + rand] ? "win" : 'lose')
          setCount(prev => (prev + (ans[props.piece * 10 + rand] ? 1 : -1)) >= 0 ? prev + (ans[props.piece * 10 + rand] ? 1 : -1) : 0)
        }

      }}
    >
      <img src={props.url} alt="Piece"></img>
    </div>
  );
}

export default Piece;
