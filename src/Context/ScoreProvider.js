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

  const [socket, setSocket] = useState({});
  const [player_1, setPlayer_1] = useState(-1);
  const [player_2, setPlayer_2] = useState(-1);
  const [invitationLink, setInvitationLink] = useState('https://www.google.com')
  const [toggleInvitePopup, setToggleInvitePopup] = useState(false)

  useEffect(() => {
    if (!socket.connected) {
      const newSocket = io('http://localhost:8080');
      setSocket(newSocket);
      console.log(newSocket);

      newSocket.on('match-ready', (payload) => {
        // setRoom(payload);
        let play_1 = Object.keys(payload.players)[0];
        let play_2 = Object.keys(payload.players)[1];

        if (play_1 === newSocket.id) {
          setPlayer_1(payload.players[play_1]);
          setPlayer_2(payload.players[play_2]);
        } else {
          setPlayer_1(payload.players[play_2]);
          setPlayer_2(payload.players[play_1]);
        }
        console.log(payload.players[play_1], payload.players[play_2], payload, 'the game is ready')
        setToggleInvitePopup(false)
      })
      return () => {
        newSocket.disconnect();
      };
    }
  }, []);


  const [selection, setSelection] = useState(0);
  const [result, setResult] = useState("...");
  const [opponentSelection, setOpponentSelection] = useState(0);
  const [playComputer, setPlayComputer] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

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
        setToggleInvitePopup
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
