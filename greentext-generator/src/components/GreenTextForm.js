import React from "react";

export default function GreenTextForm(props) {
    return (
        <div className="greentext-form">
            <label className="greentext-form-image-container"><input onChange={props.imageChange} className="greentext-form-image" type="file" id="file" />Upload Image</label>
            <textarea onChange={props.textChange} id = "greentext-form-text" className="greentext-form-text" defaultValue="be me"></textarea>
        </div>
    );
};