import React from "react";

// local files
import {
    business,
    entrepreneur,
    fastCompany,
    huffington,
    inc,
    productHunt,
    verturebeat
} from "../../../../assets/images";


export default () =>
    <div className="section-featured light-blue">
        <div className="container w-container home-container">
            <h1 className="featured-in-heading">As featured in</h1>
            <div className="featured-in-logos-wrapper">
                <img src={verturebeat} className="featured-in-logo-item"/>
                <img src={business} className="featured-in-logo-item"/>
                <img src={fastCompany} className="featured-in-logo-item"/>
                <img src={huffington} className="featured-in-logo-item"/>
                <img src={entrepreneur} className="featured-in-logo-item"/>
                <img src={inc} className="featured-in-logo-item"/>
                <img src={productHunt} className="featured-in-logo-item"/>
            </div>
        </div>
    </div>
