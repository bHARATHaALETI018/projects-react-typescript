import { useState } from "react";
import "./App.css";
import searchIcon from "./assets/search-icon-50.png";
function App() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
    console.log(clicked);
  };
  return (
    <section className="container">
      <div className={`search-bar ${clicked && "shrink"}`}>
        <input
          type="text"
          name="search"
          id="search"
          className="search-space"
          placeholder="search . . ."
        />
        <button className="search-icon" onClick={handleClick}>
          <img src={searchIcon} alt="search-icon" />
        </button>
      </div>
    </section>
  );
}

export default App;
