import { useState } from "react";
import { TURNS } from "./utilities/constants";
import Header from "./components/Header";
import Table from "./components/Table";
import Turn from "./components/Turn";

function App() {
  const [turn, setTurn] = useState(TURNS.blue);

  const handleTurn = (event) => {
    event.preventDefault();
    setTurn(turn === TURNS.blue ? TURNS.purple : TURNS.blue);
  };

  return (
    <>
      <Header />
      <div className="flex justify-center">
        <button onClick={handleTurn} className="bg-violet-500 dark:bg-violet-800 px-2 py-1 max-w-36 rounded-md shadow-md shadow-violet-200 dark:shadow-violet-700 text-white text-sm">Turn</button>
      </div>
      <Table turn={turn} />
      <Turn turn={turn} />
    </>
  );
}

export default App;
