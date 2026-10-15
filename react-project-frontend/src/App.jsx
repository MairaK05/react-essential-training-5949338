import React from "react";
import { getMaterials } from "./services/materialService";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";
import Laboratory from "./Pages/laboratory";
import { useEffect, useReducer, useState } from "react";
import "./App.css";
import imgScientist from "./assets/imgScientist.png";
let scientist = "🧑🏻‍🔬";

function Header({ name, year }) {
  return (
    <>
      <header>
        <h1>
          {name}'s Lab {scientist}
        </h1>
        <p>Copyright {year}</p>
      </header>
    </>
  );
}

function Main({ equipment }) {
  return (
    <>
      <div>
        <button class="counter">Come on in!</button>
      </div>
      <main>
        <img src={imgScientist} height={100} alt="old scientist" />
        <ul>
          {equipment.map((machine) => (
            <li key={equipment.id} style={{ listStyleType: "none" }}>
              {machine.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

const items = [
  "PCR Machines",
  "DNA Sequencers",
  "Spectrophotometers",
  "Bioreactors",
];
const machObjects = items.map((machine, i) => ({
  id: i,
  title: machine,
}));

console.log(machObjects);

function App() {
  const [status, toggle] = useReducer((status) => !status, true);

  useEffect(() => {
    console.log(`The laboratory is ${status ? "open" : "closed"}.`);
  });
  return (
    <div>
      <Header name="Conzo" year={new Date().getFullYear()} />
      <h2>The lab is currently {status ? "open" : "closed"}.</h2>
      <button class="counter" onClick={toggle}>
        {status ? "CLOSE" : "OPEN"} THE LAB!
      </button>
      <main>
        <p>He's got the most cutting-edge lab around!!</p>
      </main>
      <Main equipment={machObjects} onStatus={toggle} />

      <nav>
        <NavLink to="/laboratory">GO TO THE LAB</NavLink>
      </nav>
      <Routes>
        <Route exact path="/" component={App} />
        <Route path="/laboratory" component={Laboratory}></Route>
      </Routes>
    </div>
  );
}

export default App;
