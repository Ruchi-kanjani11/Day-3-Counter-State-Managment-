import './App.css'
import React from "react";
function App() {
  const [state, setState] = React.useState(0);

  const Increment = () => {
    setState((prev) => prev + 1);
  }
  const Decrement = () => { setState(prev => prev - 1); }
  const Reset = () => { setState(0); }

  return (
    <>
      <div className="wrapper">

        <div className="card">

          <h1 className="heading">Counter App</h1>

          <h2 className="count">Count: {state}</h2>

          <button className="btn decrease" onClick={Decrement}>
            -
          </button>

          <button className="btn reset" onClick={Reset}>
            Reset
          </button>

          <button className="btn increase" onClick={Increment}>
            +
          </button>


        </div>

      </div>
    </>
  )
}
export default App
