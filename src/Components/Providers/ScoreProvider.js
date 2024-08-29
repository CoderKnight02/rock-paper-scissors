import React, { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

export const ScoreProvider = ({ children }) => {
  const [count, setCount] = useState(() => {
    const savedCount = sessionStorage.getItem("count");
    return savedCount !== null ? JSON.parse(savedCount) : 12;
  });

  const [selection, setSelection] = useState(0);
  const [result, setResult] = useState("win");
  const [computerSelection, setComputerSelection] = useState(0);

  useEffect(() => {
    sessionStorage.setItem("count", count);
  }, [count]);

  return (
    <MyContext.Provider value={{ count, setCount, selection, setSelection, computerSelection, setComputerSelection, result, setResult }}>
      {children}
    </MyContext.Provider>
  );
};
