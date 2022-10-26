import React from "react";
import HeroImage from "../images/hero-img.png";
export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-image-container">
                <img className="hero-image" src={HeroImage} alt="Hero Image"/>
            </div>
            <div className="hero-text">
                <span className="hero-text-title">Online Experiences</span>
                <p className="hero-text-description">Join unique intereactive activities led by
                one-of-a-kind hosts -- all without leaving your home.</p>
            </div>
        </section>
    );
}

