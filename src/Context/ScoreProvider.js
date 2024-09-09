import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const MyContext = createContext();

export const ScoreProvider = ({ children }) => {
  const [count, setCount] = useState(() => {
    const savedCount = sessionStorage.getItem("count");
    return savedCount !== null ? JSON.parse(savedCount) : 0;
  });

  const [selection, setSelection] = useState(0);
  const [result, setResult] = useState("...");
  const [opponentSelection, setOpponentSelection] = useState(0);
  const [playComputer, setPlayComputer] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    sessionStorage.setItem("count", count);
  }, [count]);

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
        navigate
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
