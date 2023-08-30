import React from "react";

//local files
import {feature_1_Gif, feature_2_Gif, feature_3_Gif, feature_4_Gif} from "../../../../assets/images";

export default () =>
    <div className="homepage-features">
        <div className="section">
            <div className="container w-container home-container">
                <div className="flexbox-wrapper _2">
                    <div className="home-feature-1">
                        <h2 className="section-title home desktop-only">
                            A 360 view of candidates with integrated skills and attitude testing.
                        </h2>
                        <a
                            href="https://app.vervoe.com/registration"
                            className="text top-margin gray" className="cta large w-button"
                        >
                            Start testing skills & attitude
                        </a>
                    </div>
                    <div className="home-img-right">
                        <h2 className="section-title home tablet-only">
                            A 360 view of candidates with integrated skills and attitude testing.
                        </h2>
                        <img src={feature_1_Gif} className="media"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="diagonal-light-blue" />
        <div className="section light-blue">
            <div className="container w-container home-container">
                <div className="flexbox-wrapper _1">
                    <div className="home-img-left">
                        <h2 className="section-title home tablet-only">
                            AI recommends the best candidates, automatically.
                        </h2>
                        <img src={feature_2_Gif} className="media"/>
                    </div>
                    <div className="home-feature-2">
                        <h2 className="section-title home desktop-only">
                            AI recommends the best candidates, automatically.
                        </h2>
                        <a href="https://app.vervoe.com/registration"
                           className="text top-margin gray"
                           className="cta large w-button"
                        >
                            Automate candidate selection
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="diagonal-light-blue diagonal-line-2"></div>
        <div className="section">
            <div className="container w-container home-container">
                <div className="flexbox-wrapper _2">
                    <div className="home-feature-3">
                        <h2 className="section-title home desktop-only">
                            Customizable Talent Trials to test any skill or attribute.
                        </h2>
                        <a
                            href="https://app.vervoe.com/registration"
                            className="text top-margin gray"
                            className="cta large w-button"
                        >
                            Start customizing Talent Trials
                        </a>
                    </div>
                    <div className="home-img-right">
                        <h2 className="section-title home tablet-only">
                            Customizable Talent Trials to test any skill or attribute.
                        </h2>
                        <img src={feature_3_Gif} className="media"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="diagonal-light-blue"></div>
        <div className="section light-blue">
            <div className="container w-container home-container">
                <div className="flexbox-wrapper _1">
                    <div className="home-img-left">
                        <h2 className="section-title home tablet-only">
                            Every candidate gets a chance to showcase their talent.
                        </h2>
                        <img src={feature_4_Gif} className="media"/>
                    </div>
                    <div className="home-feature-4">
                        <h2 className="section-title home desktop-only">
                            Every candidate gets a chance to showcase their talent.
                        </h2>
                        <a
                            href="https://app.vervoe.com/registration"
                            className="text top-margin gray"
                            className="cta large w-button"
                        >
                            Give every candidate a chance
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
