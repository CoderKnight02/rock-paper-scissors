import React, { createContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { io } from "socket.io-client";
export const MyContext = createContext();

export const ScoreProvider = ({ children }) => {

  const [count, setCount] = useState(() => {
    const savedCount = sessionStorage.getItem("count");
    return savedCount !== null ? JSON.parse(savedCount) : 0;
  });
  useEffect(() => {
    sessionStorage.setItem("count", count);
  }, [count]);

  const [socket, setSocket] = useState(null);
  const [player_1, setPlayer_1] = useState(-1);
  const [player_2, setPlayer_2] = useState(-1);
  const [room, setRoom] = useState('');
  const [invitationLink, setInvitationLink] = useState('https://www.google.com')
  const [toggleInvitePopup, setToggleInvitePopup] = useState(false)
  const [matchReady, setMatchReady] = useState(false);
  const [selection, setSelection] = useState(0);
  const [result, setResult] = useState("...");
  const [opponentSelection, setOpponentSelection] = useState(0);
  const [playComputer, setPlayComputer] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!socket) {
      const newSocket = io(process.env.REACT_APP_SOCKET_URL || 'http://localhost:8080');
      setSocket(newSocket);
      console.log(newSocket);


      newSocket.on('match-ready', (payload) => {
        let playerId_1 = Object.keys(payload.players)[0];
        let playerId_2 = Object.keys(payload.players)[1];
        setRoom(payload.roomId);

        if (playerId_1 === newSocket.id) {
          setPlayer_1(payload.players[playerId_1].score);
          setPlayer_2(payload.players[playerId_2].score);
        } else {
          setPlayer_1(payload.players[playerId_2].score);
          setPlayer_2(payload.players[playerId_1].score);
        }

        setToggleInvitePopup(false);
        setMatchReady(true);
      });

      newSocket.on('player-left', () => {
        setPlayComputer(true)
        setMatchReady(false)
        setRoom('')
        setSelection(0)
        setOpponentSelection(0)
        setPlayer_1(-1)
        setPlayer_2(-1)
        alert('opponent-left')
        navigate('/')
        newSocket.emit('leave-room', room);
      });


      newSocket.on('match', (res) => {
        console.log(res);

        let list = Object.keys(res);
        if (list[0] === newSocket.id) {
          setResult(res[list[0]].result)
          setOpponentSelection(res[list[0]].selection)
          setPlayer_1(res[list[0]].score)
          setPlayer_2(res[list[1]].score)
        } else {
          setResult(res[list[1]].result)
          setOpponentSelection(res[list[1]].selection)
          setPlayer_1(res[list[1]].score)
          setPlayer_2(res[list[0]].score)
        }
      })

      return () => {
        if (socket) {
          socket.emit('leave-room', room);
          socket.disconnect();
        }
      };


    }
  }, []);

  return (
    <MyContext.Provider
      value={{
        count,
        setCount,
        selection,
        setSelection,
        result,
        setResult,
        opponentSelection,
        setOpponentSelection,
        playComputer,
        setPlayComputer,
        navigate,
        location,
        socket,
        player_1,
        player_2,
        invitationLink,
        setInvitationLink,
        toggleInvitePopup,
        setToggleInvitePopup,
        matchReady,
        setMatchReady,
        room,
        setRoom
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
