import { useContext } from "react";
import "./Match.css";
import rock from "../../images/icon-rock.svg";
import scissors from "../../images/icon-scissors.svg";
import spock from "../../images/icon-spock.svg";
import lizard from "../../images/icon-lizard.svg";
import paper from "../../images/icon-paper.svg";  // Importing paper image here
import { MyContext } from "../Providers/ScoreProvider";


function Match() {
    const { selection, setSelection, result, setResult, opponentSelection, setOpponentSelection } = useContext(MyContext);


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
