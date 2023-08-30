import React from "react";

import {interviews_png} from "../../../../assets/images";


export default () =>
    <div className="homepage-interview">
        <div className="top-title-section">
            <div className="container w-container home-container">
                <div className="flexbox-wrapper _2">
                    <div className="homepage-top-title">
                        <h2 className="top-title home">
                            Make your interviews count
                        </h2>
                        <h3 className="top-desc home">
                            Interview only the top candidates
                            <span className="ita">after</span>
                            you have validated their skills. Make face-to-face time count by focusing on culture, closing the deal and setting your new hires up for success.
                        </h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="section">
            <div className="container w-container home-container">
                <img src={interviews_png} />
            </div>
        </div>
    </div>
