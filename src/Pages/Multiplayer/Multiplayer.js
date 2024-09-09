import "./Multiplayer.css";
// import React, { useState } from "react";
import Piece from "../../Components/Common/Piece.js"
import { pieces } from "../../Components/Common/utiles.js"
import MultiplayerScoreBar from "../../Components/MultiplayerScoreBar/MultiplayerScoreBar.js";

function Multiplayer() {


    return (
        <>
            <MultiplayerScoreBar></MultiplayerScoreBar>
            <div className="game-pro">
                {pieces.map(({ url, color, piece }) => (
                    <Piece key={piece} url={url} color={color} piece={piece} />
                ))}
            </div>
            
            
        </>
    );
}

export default Multiplayer;
