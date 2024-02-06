import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [data, setData] = useState([]);

  return (
    <>
      <Navbar />
      <Main />
    </>
  );
}

export default App;
