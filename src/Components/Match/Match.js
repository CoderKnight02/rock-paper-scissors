import { useContext } from "react";
import "./Match.css";
import { MyContext } from "../../Context/ScoreProvider";
import { hexToRgb, pieces } from '../Common/utiles';


function Match() {
    const { selection, setSelection, result, setResult, opponentSelection, setOpponentSelection } = useContext(MyContext);

    return (
        <>
            <div className="game-result">

                <div className={`round-corner animate ${result === 'win' ? 'winner' : ''}`} style={{
                    borderColor: `${pieces[selection - 1].color}`,
                    boxShadow: `0px 8px rgba(${hexToRgb(pieces[selection - 1].color)}, 0.3)`,
                }}>
                    <div className="inner-shadow">
                        <img src={pieces[selection - 1].url} alt="piece"></img>
                    </div>
                </div>

                <div className="mid-sect">
                    <p className="veredict">You {result}</p>
                    <button
                        className="game-result-button" onClick={
                            () => {
                                setOpponentSelection(0); setSelection(0); setResult("...");
                            }}
                        disabled={opponentSelection === 0}
                    >Play Again</button>
                </div>

                {opponentSelection !== 0 ? (
                    <div className={`round-corner animate ${result === 'lose' ? 'winner' : ''}`} style={{
                        borderColor: `${pieces[opponentSelection - 1].color}`,
                        boxShadow: `0px 9px rgba(${hexToRgb(pieces[opponentSelection - 1].color)}, 0.4)`,
                    }}>
                        <div className="inner-shadow" >
                            <img src={pieces[opponentSelection - 1].url} alt='piece'></img>
                        </div>
                    </div>
                ) : (
                    <div className="loading"></div>
                )}


            </div >
        </>
    );
}

export default Match;
