import "./App.css";
import ScoreBar from "./Components/ScoreBar/ScoreBar.js";
import Footer from "./Components/Footer/Footer.js";
import GamePro from "./Components/GamePro/GamePro.js";
import { ScoreProvider } from "./Components/Providers/ScoreProvider.js";

function App() {
  return (
    <div className="App">
      <ScoreProvider>
        <ScoreBar></ScoreBar>
        <GamePro></GamePro>
      </ScoreProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
