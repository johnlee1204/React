import React from "react";

export default function GreenTextForm(props) {
    return (
        <div className="greentext-form">
            <textarea onChange={props.textChange} id = "greentext-form-text" className="greentext-form-text" defaultValue="be me"></textarea>
        </div>
    );
};