import React from "react";

import LearnTags from "../LearnTags";

export default () =>
    <div className="homepage-learn">
        <div className="top-title-section">
            <div className="container w-container home-container">
                <div className="flexbox-wrapper _2">
                    <div className="homepage-top-title">
                        <h2 className="home-title-2 home">Learn more…</h2>
                    </div>
                </div>
            </div>
        </div>

        <LearnTags />
        <div style={{ width: '100%', height: '100px' }} className="desktop-only"></div>
        <div style={{ width: '100%', height: '30px' }} className="tablet-only"></div>
    </div >
