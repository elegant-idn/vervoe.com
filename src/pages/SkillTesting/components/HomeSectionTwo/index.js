import React, { Component } from "react";

// local files
import {
    cognitive_large_png,
    cognitive_png,
    personality_large_png,
    personality_png
} from "../../../../assets/images";


class HomeSectionTwo extends Component {
    state = {
        section: 0
    };

    render() {
        const { section } = this.state;
        return (
            <div className="homepage-assesments">
                <div className="top-title-section">
                    <div className="container w-container home-container">
                        <div className="homepage-top-title">
                            <h2 className="top-title home">
                                Combine real-world skill testing with pre-employment assessments
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="container w-container home-container">
                    <div className="center">
                        <div
                            className={!section? 'asses-tab active' : 'asses-tab'}
                            onClick={() => this.setState({ section: 0 })}
                        >
                             PERSONALITY
                        </div>
                        <div
                            className={section? 'asses-tab active' : 'asses-tab'}
                            onClick={() => this.setState({ section: 1 })}
                        >
                            COGNITIVE
                        </div>
                    </div>
                </div>
                {
                    section ?
                            <div id="section-cognitive" className="section">
                                <div className="container w-container home-container">
                                    <img src={cognitive_png} className="tablet-only" />
                                    <img src={cognitive_large_png} className="desktop-only" />
                                </div>
                            </div>
                        :
                            <div id="section-personality" className="section">
                                <div className="container w-container home-container">
                                    <img src={personality_png} className="tablet-only" />
                                    <img src={personality_large_png} className="desktop-only" />
                                </div>
                            </div>

                }
                <h3 className="asses-desc section-desc home">
                    Predict behavior and test cognitive ability using validated psychometric assessments from market-leading providers.
                </h3>
            </div>
        );
    };
}

export default HomeSectionTwo
