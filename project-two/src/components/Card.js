import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
library.add(faLocationDot);

export default function Card(props) {
    const startDate = moment(props.startDate).format("ll");
    const endDate = moment(props.endDate).format("ll");
    return (
        <section className="card">
            <img className="card-image" src={props.imageUrl} alt="Image"/>
            <div className="card-info">
                <div className="card-info-location">
                    <FontAwesomeIcon icon="fa-solid fa-location-dot"></FontAwesomeIcon>
                    <span>{props.location}</span>
                    <a href={props.googleMaps}>View in Google Maps</a>
                </div>
                <span className="card-info-title">{props.title}</span>
                <span className="card-info-duration">{startDate} - {endDate}</span>
                <span className="card-info-description">{props.description}</span>
            </div>
        </section>
    );
}