import { useState } from "react";
import "./App.css";
import Circle from "./Circle";

function App() {
  const [present, setNext] = useState(1);
  const [progress, setProgress] = useState(0);
  const totalCircles = 6;
  const validate = (value: number) => {
    if (value > 0 && value <= totalCircles) {
      setNext(value);
      setProgress(((value-1) / (totalCircles-1) * 100));
    }
    
  };

  return (
    <section className="main">
      <div className="container">
        <div className="progress-container">
          <div className={`progress`} style={{width:`${progress}%`}}></div>
          {[...Array(totalCircles)].map((_, idx) => (
            <Circle
              key={idx}
              num={idx+1}
              present={present}
            />
          ))}
        </div>

        <button
          className={`btn ${present <= 1 ? "disabled" : ""} `}
          onClick={()=>validate(present-1)}
        >
          prev
        </button>
        <button
          className={`btn ${present >= totalCircles ? "disabled" : ""}`}
          onClick={() => validate(present + 1)}>
          next
        </button>
      </div>
    </section>
  );
}

export default App;
