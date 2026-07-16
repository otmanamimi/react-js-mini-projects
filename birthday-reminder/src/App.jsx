import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import data from "./data";
import List from "./List.jsx";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <>
      <main>
        <section className="container">
          <h3>{people.length} birthdays today</h3>
          <List people={people} />
          <button
            onClick={() => {
              setPeople([]);
            }}
            className="btn"
          >
            clear All
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
