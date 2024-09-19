import { useContext } from "react";
import { MyContext } from "../../Context/ScoreProvider";


function MultiplayerScoreBar() {
    const { player_1, player_2 } = useContext(MyContext);


    return (
        <>
            <div className="score-bar">

                <div className="score-section">
                    <h2>Your Score</h2>
                    <div className="score">{player_1}</div>
                </div>
                <div className="score-section">
                    <h2>Opponent Score</h2>
                    <div className="score">{player_2}</div>
                </div>

            </div>
        </>
    );
}

export default MultiplayerScoreBar;
