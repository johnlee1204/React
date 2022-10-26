import React from "react";
import Header from "./components/Header";
import GreenTextForm from "./components/GreenTextForm";
import "./style.css";
import GreenText from "./components/GreenText";
import moment from "moment/moment";

export default function App(props) {
    const changeGreentext = (text) => {
        setText(text.target.value);
    };
    const [text, setText] = React.useState("be me");
    return (
        <div className="app">
            <Header />
            <GreenTextForm
            textChange = {changeGreentext}
            />
            <GreenText
                postDate = {props.postDate}
                postId = {props.postId}
                text={text}
            />
        </div>
    );
};