import React, {useState} from "react";
import GreenTextHeader from "./GreenTextHeader";
import GreenTextBody from "./GreenTextBody";

import moment from "moment";

export default function GreenText(props) {
    return (
        <div className="greentext">
            <div className="greentext-container">
                <GreenTextHeader
                    key={props.postId}
                    postDate = {props.postDate}
                    postId = {props.postId}
                />
                <GreenTextBody
                    key = {Math.random() * 999}
                    text={props.text}
                />
            </div>
        </div>
    );
};