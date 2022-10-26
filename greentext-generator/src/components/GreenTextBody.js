import React from "react";

export default function GreenTextBody(props) {
    const formattedText = props.text.split("\n").map((element) => <p key={Math.random() * 1000} className='greentext-body-text'>>{element}</p>);
    return (
        <div className="greentext-body">
            <img className="greentext-body-img" src={props.image} alt="img"></img>
            <blockquote className="greentext-body-blockquote">
                {formattedText}
            </blockquote>
        </div>
    );
};