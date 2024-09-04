import { act, useState } from "react";
import "./App.css";
import { Images } from "./assets/images";
import Card from "./card";

function App() {
  const [active, setActive] = useState(1);
  return (
    <section className="container">
      <div className="cards">
        {Images.map((image, index) => (
          <Card
            key={image.id}
            link={image.link}
            text={image.text}
            isActive={index === active}
            change = {()=>setActive(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default App;
