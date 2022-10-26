import React from "react";
import Joke from "./components/Joke";
import "./style.css";

export default function App() {
    const jokes = [
        {setup: "Why did the chicken cross the road?", punchline: "To get to the other side."},
        {setup: "What’s the best thing about Switzerland?", punchline: "I don’t know, but the flag is a big plus."},
        {setup: "Did you hear about the mathematician who’s afraid of negative numbers?", punchline: "He’ll stop at nothing to avoid them."},
        {setup: "Why do we tell actors to “break a leg?”", punchline: "Because every play has a cast."}
    ];
    const jokesComponents = jokes.map(joke => {
        return <Joke setup={joke.setup} punchline={joke.punchline}/>
    });
    return (
        <div className="app">
            {jokesComponents}
        </div>
    );
};