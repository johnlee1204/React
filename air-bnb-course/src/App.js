import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
import "./style.css";

export default function App() {

    const cards = data.map(card => {
        return <Card
            key = {card.id}
            item = {card}
        />;
    });
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <section className="cards">
                {cards}
            </section>
        </div>
    );
};