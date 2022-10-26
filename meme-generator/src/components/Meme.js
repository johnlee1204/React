import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import memesData from "../memesData";
library.add(faImage);

export default function Meme() {
    const memes = memesData.data.memes;

    function handleClick() {
        const meme = memes[Math.floor(Math.random() * memes.length)];
        document.getElementById("memeImage").src = meme.url;
    }

    function updateTopText(event) {
        document.getElementById("topText").innerHTML = document.getElementById("topTextField").value;
    }

    function updateBottomText(event) {
        document.getElementById("bottomText").innerHTML = document.getElementById("bottomTextField").value;
    }

    return (
        <main className="meme">
            <div className="meme-form">
                <div className="meme-inputs">
                    <input id="topTextField" onChange={updateTopText} className="meme-topText" type="text" placeholder="Top text" name="topText"/>
                    <input id="bottomTextField" onChange={updateBottomText} className="meme-bottomText" type="text" placeholder="Bottom text" name="bottomText"/>
                </div>
                <button className="meme-submit" onClick={handleClick} >Get a new meme image <FontAwesomeIcon icon="fa-solid fa-image" /></button>
                <div className="meme-form-image-container">
                    <img id="memeImage" className="meme-form-meme" src={memes[1].url} alt="meme"/>
                    <h1 id="topText"></h1>
                    <h1 id="bottomText"></h1>
                </div>
            </div>
        </main>
    );
};