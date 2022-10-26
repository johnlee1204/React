import React from "react";

export default function GreenTextHeader(props) {
    return (
        <div className="greentext-header">
            <p className="greentext-header-author">Anonymous</p>
            <p className="greentext-header-date">{props.postDate}</p>
            <p className="greentext-header-post-id">No. {props.postId}</p>
        </div>
    );
};