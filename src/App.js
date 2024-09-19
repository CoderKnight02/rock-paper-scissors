import "./App.css";

import Computer from "./Pages/Computer/Computer.js";
import Multiplayer from "./Pages/Multiplayer/Multiplayer.js";
import { ScoreProvider } from "./Context/ScoreProvider.js";
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Footer from './Components/Footer/Footer.js'
function App() {
  return (
    <div className="App">
      <Router>
        <ScoreProvider>
          <Routes>
            <Route path="/" element={<Computer />} />
            <Route path="/play/:roomId" element={<Multiplayer />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </ScoreProvider>
      </Router>
    </div>
  );
}

export default App;
