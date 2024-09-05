import "./App.css";
import ScoreBar from "./Components/ScoreBar/ScoreBar.js";
import Footer from "./Components/Footer/Footer.js";
import GamePro from "./Components/GamePro/GamePro.js";
import { ScoreProvider } from "./Components/Providers/ScoreProvider.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ScoreProvider>
        <ScoreBar></ScoreBar>
        {/* <Routes> */}
          {/* Default route (GamePro is the main game component) */}
          {/* <Route path="/" element={<GamePro />} /> */}
          <GamePro />

          {/* Dynamic route to handle invitations with roomId */}
          {/* <Route path="/play/:roomId" element={<Game />} /> */}
        {/* </Routes> */}
      </ScoreProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
