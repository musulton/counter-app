import React from "react";
import './App.css';

function App() {
    const [counter, setCount] = React.useState(0);

    const increase = () => setCount(counter + 1);
    const decrease = () => setCount(counter - 1);

  return (
    <div className="container">
      <h1>Counter App</h1>
        {counter}
        <div>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    </div>
  );
}


export default App;
