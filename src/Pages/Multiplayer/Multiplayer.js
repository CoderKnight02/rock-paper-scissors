import { useEffect, useContext } from "react";
import "./Multiplayer.css";
import Piece from "../../Components/Common/Piece.js";
import { pieces } from "../../Components/Common/utiles.js";
import MultiplayerScoreBar from "../../Components/MultiplayerScoreBar/MultiplayerScoreBar.js";
import { MyContext } from "../../Context/ScoreProvider";

function Multiplayer() {
    const { socket, location, navigate, setPlayComputer } = useContext(MyContext); // Use MyContext here

    useEffect(() => {
        let roomId = location.pathname.split("/")[2];
        console.log(roomId)
        // Check if roomId exists
        if (roomId) {
            console.log(socket)
            setPlayComputer(false);
            // Ensure socket connection is established before emitting
            if (socket && socket.emit) {
                // Emit join-room event and handle errors
                socket.emit('join-room', { roomId }, (err) => {
                    if (err) {
                        console.error("Error joining room:", err);
                        navigate('/');
                    }
                })
            }
        }
        
    }, [location.pathname, navigate, socket]);

    return (
        <>
            <MultiplayerScoreBar />
            <div className="game-pro">
                {pieces.map(({ url, color, piece }) => (
                    <Piece key={piece} url={url} color={color} piece={piece} />
                ))}
            </div>
        </>
    );
}

export default Multiplayer;
