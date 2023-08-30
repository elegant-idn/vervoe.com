import React from "react";

// local files
import {chatSupport, gdpr, noSetup} from "../../../../assets/images";

export default () =>
    <div className="section light-blue homepage-icons">
        <div className="container center w-container home-container">
            <div className="flexbox-wrapper">
                <div className="icons-home">
                    <img src={chatSupport} className="icon"/>
                    <h5 className="icon-text">Live chat support on all plans</h5>
                </div>
                <div className="icons-home">
                    <img src={gdpr} className="icon"/>
                    <h5 className="icon-text">GDPR compliant</h5>
                </div>
                <div className="icons-home">
                    <img src={noSetup} className="icon"/>
                    <h5 className="icon-text">No setup, hire same day</h5>
                </div>
            </div>
        </div>
    </div>
