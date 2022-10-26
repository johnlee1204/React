import React from "react";
import StarImage from "../images/star.png";

export default function Card({item}) {
    console.log(item);
    return (
        <div className="card">
            <div className="card-image-container">
                <img className="card-image" src={require("../images/" + item.coverImg)} alt="Person Image" />
                {item.openSpots === 0 && <span>SOLD OUT</span>}
                {item.openSpots !== 0 && item.location === "Online" && <span>ONLINE</span>}
            </div>
            <div className="card-text">
                <div className="card-text-top">
                    <img className="card-text-top-star" src={StarImage} alt="Star Image" />
                    <span className="card-text-top-stars">{item.stats.rating}</span>
                    <span className="card-text-top-place"> ({item.stats.reviewCount})·{item.location}</span>
                </div>
                <span className="card-text-middle">{item.title}</span>
                <div className="card-text-bottom">
                    <span className="card-text-bottom-left">From ${item.price}</span>
                    <span className="card-text-bottom-right"> / person</span>
                </div>
            </div>
        </div>
    );
}