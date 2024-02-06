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
      <div className="flex flex-wrap justify-center items-center">
        {data.items?.map((characters) => (
          <div
            key={characters.id}
            className="border-2 w-60 h-60 flex-col justify-center items-center"
          >
            <img
              src={characters.image}
              alt="warriors"
              className=" h-32 w-32  "
            />
            <div>
              <p>{characters.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
