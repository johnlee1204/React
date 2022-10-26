import React from "react";
import Header from "./components/Header";
import GreenTextForm from "./components/GreenTextForm";
import "./style.css";
import GreenText from "./components/GreenText";
import html2canvas from "html2canvas";

export default function App(props) {
    const changeGreentext = (text) => {
        setText(text.target.value);
        if(document.getElementById("greentextImage")) {
            document.getElementsByClassName("greentext")[0].removeChild(document.getElementById("greentextImage"));
            document.getElementsByClassName("greentext-mobile-saveimagebelow")[0].style.display = "none";
        }
    };
    const changeGreentextImage = (image) => {
        setImage(URL.createObjectURL(image.target.files[0]));
        if(document.getElementById("greentextImage")) {
            document.getElementsByClassName("greentext")[0].removeChild(document.getElementById("greentextImage"));
            document.getElementsByClassName("greentext-mobile-saveimagebelow")[0].style.display = "none";
        }
    };
    const [text, setText] = React.useState("be me");
    const [image, setImage] = React.useState(require("./images/logo.jpg"));
    return (
        <div className="app">
            <Header />
            <GreenTextForm
            textChange = {changeGreentext}
            imageChange = {changeGreentextImage}
            />
            <GreenText
                postDate = {props.postDate}
                postId = {props.postId}
                text={text}
                image={image}
            />
        </div>
    );
};