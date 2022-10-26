import React from "react";

export default function Joke({setup, punchline}) {
    return (
        <div className="joke">
            {setup && <span className="joke-setup">{setup}</span>}
            <span className="joke-punchline">{punchline}</span>
        </div>
    );
}