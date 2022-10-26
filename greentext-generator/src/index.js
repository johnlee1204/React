import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App";
import moment from "moment";

const root = ReactDOM.createRoot(document.getElementById("root"));
const postDate = moment().format("M/D/YYYY H:MM:SS");
const postId = Math.round(Math.random() * 999999);
root.render(
    <App
        postDate = {postDate}
        postId = {postId}
    />
);