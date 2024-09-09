import { useContext } from "react";
import "./MultiplayerScoreBar.css";
import { MyContext } from "../../Context/ScoreProvider";


function MultiplayerScoreBar() {
    const { player_1, player_2 } = useContext(MyContext);

    return (
        <>
            <div className="score-bar vs-section">

                <div className="score-section">
                    <h2>Your Score</h2>
                    <div className="score">{10}</div>
                </div>
                <div className="score-section">
                    <h2>Opponent Score</h2>
                    <div className="score">{10}</div>
                </div>

            </div>
        </>
    );
}

export default MultiplayerScoreBar;
