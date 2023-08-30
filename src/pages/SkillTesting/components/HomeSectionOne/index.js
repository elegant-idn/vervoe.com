import React from "react";
import {
    feature_1,
    feature_1_large,
    feature_2,
    feature_2_large,
    feature_3,
    feature_3_large
} from "../../../../assets/images";


export default () =>
            <div className="homepage-features">
                <div className="skills-testing-title-section">
                    <div className="container w-container skills-container">
                        <div className="flexbox-wrapper _2">
                            <div className="homepage-top-title">
                                <h2 className="top-title home">
                                    See how people
                                    <span className="top-title-do"> do </span>
                                    the job before they get the job.
                                </h2>
                                <h3 className="top-desc home">
                                    Give candidates an opportunity to perform tasks they&apos;ll do on the job.<br />
                                    See them in action in real-world scenarios.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="container w-container skills-container">
                        <div className="flexbox-wrapper _2">
                            <div className="home-feature-1">
                                <img src={feature_1} className="tablet-only" />
                                <div>
                                    <h2 className="section-title home desktop-only">
                                        Who will make<br />
                                        the best design?
                                    </h2>
                                    <h2 className="section-title home tablet-only">
                                        Who will make the best design?
                                    </h2>
                                    <h3 className="section-desc home">
                                        See designers do a range of tasks, including create a logo, make an illustration, design a landing page, define brand guidelines, make an ad, create a promo video or complete a design challenge.
                                    </h3>
                                </div>
                            </div>
                            <div className="home-img-right">
                                <img src={feature_1_large} className="desktop-only" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="container w-container skills-container">
                        <div className="flexbox-wrapper _1">
                            <div className="home-img-left">
                                <img src={feature_2_large} className="desktop-only" />
                            </div>
                            <div className="home-feature-2">
                                <img src={feature_2} className="tablet-only" />
                                <h2 className="section-title home">
                                    Who will grow your business the most?
                                </h2>
                                <h3 className="section-desc home">
                                    See how marketers analyze funnels, balance ad spending, calculate ROI per marketing channel, write product announcements or create social campaigns. Even see them recording themselves pitching an exciting marketing idea.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="container w-container skills-container">
                        <div className="flexbox-wrapper _2">
                            <div className="home-feature-3">
                                <img src={feature_3} className="tablet-only" />
                                <h2 className="section-title home">
                                    Who will provide the best service?
                                </h2>
                                <h3 className="section-desc home">
                                    See how customer service representatives actually represent your brand by asking them to respond to an angry customer audio recording or an incoming chat from a genuinely concerned high value customer.
                                </h3>
                            </div>
                            <div className="home-img-right">
                                <img src={feature_3_large} className="desktop-only" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
