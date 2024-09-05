import React, { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

export const ScoreProvider = ({ children }) => {
  const [count, setCount] = useState(() => {
    const savedCount = sessionStorage.getItem("count");
    return savedCount !== null ? JSON.parse(savedCount) : 12;
  });

  const [selection, setSelection] = useState(0);
  const [result, setResult] = useState("...");
  const [opponentSelection, setOpponentSelection] = useState(0);
  const [playFriend, setPlayFriend] = useState(true);


  useEffect(() => {
    sessionStorage.setItem("count", count);
  }, [count]);

  return (
    <MyContext.Provider value={{ count, setCount, selection, setSelection, result, setResult, opponentSelection, setOpponentSelection: setOpponentSelection, playFriend, setPlayFriend }}>
      {children}
    </MyContext.Provider>
  );
};
