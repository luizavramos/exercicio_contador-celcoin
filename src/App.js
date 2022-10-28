import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  function sum() {
    setCounter(counter + 1);
  }

  function sub() {
    setCounter(counter - 1);
  }

  return (
    <div>
    <h1>{counter}</h1>
    <button onClick={sum}>+</button>
    <button onClick={sub}>-</button>
  </div>
  );
}

export default App;
