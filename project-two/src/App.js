import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

import "./style.css";
import travelData from "./travelData";
const cards = travelData.map(location => <Card {...location} />);

export default function App() {
      return (
          <div className="app">
              <Navbar />
              <section className="cards">
                  {cards}
              </section>
          </div>
      );
};