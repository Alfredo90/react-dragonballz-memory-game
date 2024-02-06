import Navbar from "./components/Navbar/Navbar";
import useAxiosData from "./useAxiosData";
// import { useState } from "react";

function App() {
  const { data, loading, error } = useAxiosData(
    "https://dragonball-api.com/api/characters"
  );

  // const [score, setScore] = useState(0);
  // const [bestScore, setBestScore] = useState(0);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <Navbar />
      <div>
        {data.items?.map((characters) => (
          <li key={characters.id}>
            <img src={characters.image} alt="warriors" />
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;
