import { useState } from "react";
import "./App.css";

function App() {
  const [rotated, setRotated] = useState(false);
  const handleClick = () => {
    setRotated(!rotated);
  };
  return (
    <section className="main-container">
      <div className={`hide ${rotated ? "first " : ""}`}>Home</div>
      <div className={`hide ${rotated ? " second" : ""}`}>Content</div>
      <div className={`hide ${rotated ? "third" : ""}`}>About</div>

      <section
        className={`
          rotation-space
          ${rotated === false ? "" : "rotate"}
          `}
      >
        <section className="circle" onClick={handleClick}>
          <div className="lines">
            <div className="line "></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="cross">
            <div className="line-b one"></div>
            <div className="line-b two"></div>
          </div>
        </section>

        <section className="right">
          <div>
            <h1>Circular Navigation Bar</h1>
            <p>Simple practise project</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            corporis beatae est. Rerum, placeat atque? Tempora sapiente delectus
            asperiores neque distinctio excepturi natus odio eveniet. Cum
            aliquid, error optio libero tenetur architecto incidunt voluptates
            sapiente placeat eius amet et odit adipisci quibusdam fugiat,
            dolores modi, distinctio atque! Consequuntur ipsa fugiat perferendis
            pariatur praesentium dolor nihil voluptate id! Praesentium
            temporibus placeat, quam neque, asperiores harum aut molestiae
            beatae sunt maxime incidunt. Amet reprehenderit maiores non, alias
            saepe ut consectetur inventore ipsum laboriosam cupiditate possimus
            itaque iusto a optio quasi dolores velit totam id impedit aliquid
            est exercitationem reiciendis assumenda voluptatem! Eius consequatur
            consequuntur nisi id molestias fugit sequi. Distinctio fugiat illo
            soluta, assumenda molestiae excepturi. Reiciendis necessitatibus
            eveniet atque hic veritatis!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            quasi labore temporibus repudiandae, cumque, autem doloremque enim
            perspiciatis a repellendus voluptas molestias molestiae. Obcaecati
            officia consequuntur, tempore, pariatur magnam omnis sit maxime
            adipisci placeat ipsa nesciunt hic necessitatibus consequatur illo
            doloremque exercitationem ad harum porro quaerat blanditiis numquam
            dolores vitae debitis ipsam! Voluptatum amet sit nihil ab dolor
            maiores molestias minus at nesciunt! Perferendis necessitatibus,
            voluptates possimus veritatis enim voluptatum repellat labore quis,
            consectetur, facilis vero reprehenderit? Quaerat, adipisci placeat
            ullam quasi magni dolores soluta laudantium blanditiis facilis
            expedita, porro quas vitae, cupiditate non quibusdam facere tenetur
            tempore rerum at? In repudiandae corrupti totam ipsum nihil cumque
            ullam optio laborum, delectus eligendi soluta nisi, deleniti sit
            asperiores eius repellat ipsam rerum corporis voluptatem temporibus
            repellendus placeat! Quisquam reiciendis in doloribus iusto
            necessitatibus, inventore modi! Numquam eligendi repudiandae
            necessitatibus fugit dolor, voluptate voluptatem id, accusamus
            aliquid laboriosam minima esse dicta cumque?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim odit
            iusto quasi, aliquam similique quas ullam distinctio at facere
            quisquam. Veniam hic ea, praesentium ab quo reprehenderit eligendi
            tenetur illum pariatur totam minus sint amet neque molestiae officia
            fugiat repellendus beatae ut itaque dolore adipisci quod dolor.
            Perspiciatis accusamus veniam error, sint ad, blanditiis ducimus
            pariatur quis laudantium dignissimos nobis assumenda! Vero, eveniet.
            Sunt numquam ab aut placeat quaerat iure cupiditate atque
            exercitationem omnis esse quae repudiandae non unde dolorum qui,
            fugit in nostrum eaque eveniet ex. Accusantium nulla architecto ab
            doloribus ea provident, perspiciatis ullam accusamus voluptatibus
            enim optio veniam a ad et iste consequatur culpa blanditiis sint
            modi porro voluptates facere quibusdam nobis? Dicta nisi omnis esse
            dolor.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim odit
            iusto quasi, aliquam similique quas ullam distinctio at facere
            quisquam. Veniam hic ea, praesentium ab quo reprehenderit eligendi
            tenetur illum pariatur totam minus sint amet neque molestiae officia
            fugiat repellendus beatae ut itaque dolore adipisci quod dolor.
            Perspiciatis accusamus veniam error, sint ad, blanditiis ducimus
            pariatur quis laudantium dignissimos nobis assumenda! Vero, eveniet.
            Sunt numquam ab aut placeat quaerat iure cupiditate atque
            exercitationem omnis esse quae repudiandae non unde dolorum qui,
            fugit in nostrum eaque eveniet ex. Accusantium nulla architecto ab
            doloribus ea provident, perspiciatis ullam accusamus voluptatibus
            enim optio veniam a ad et iste consequatur culpa blanditiis sint
            modi porro voluptates facere quibusdam nobis? Dicta nisi omnis esse
            dolor.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim odit
            iusto quasi, aliquam similique quas ullam distinctio at facere
            quisquam. Veniam hic ea, praesentium ab quo reprehenderit eligendi
            tenetur illum pariatur totam minus sint amet neque molestiae officia
            fugiat repellendus beatae ut itaque dolore adipisci quod dolor.
            Perspiciatis accusamus veniam error, sint ad, blanditiis ducimus
            pariatur quis laudantium dignissimos nobis assumenda! Vero, eveniet.
            Sunt numquam ab aut placeat quaerat iure cupiditate atque
            exercitationem omnis esse quae repudiandae non unde dolorum qui,
            fugit in nostrum eaque eveniet ex. Accusantium nulla architecto ab
            doloribus ea provident, perspiciatis ullam accusamus voluptatibus
            enim optio veniam a ad et iste consequatur culpa blanditiis sint
            modi porro voluptates facere quibusdam nobis? Dicta nisi omnis esse
            dolor.
          </p>
        </section>
      </section>
    </section>
  );
}

export default App;
